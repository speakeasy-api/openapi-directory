import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import devicetierconfig as shared_devicetierconfig


@dataclass_json
@dataclasses.dataclass
class ListDeviceTierConfigsResponse:
    r"""ListDeviceTierConfigsResponse
    Response listing existing device tier configs.
    """
    
    device_tier_configs: Optional[list[shared_devicetierconfig.DeviceTierConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceTierConfigs') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
