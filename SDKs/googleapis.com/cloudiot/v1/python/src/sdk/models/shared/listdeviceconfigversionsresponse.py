import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deviceconfig as shared_deviceconfig


@dataclass_json
@dataclasses.dataclass
class ListDeviceConfigVersionsResponse:
    r"""ListDeviceConfigVersionsResponse
    Response for `ListDeviceConfigVersions`.
    """
    
    device_configs: Optional[list[shared_deviceconfig.DeviceConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceConfigs') }})
    
