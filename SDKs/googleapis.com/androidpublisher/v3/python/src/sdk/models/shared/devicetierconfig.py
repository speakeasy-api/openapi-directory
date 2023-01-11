import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import devicegroup as shared_devicegroup
from ..shared import devicetierset as shared_devicetierset


@dataclass_json
@dataclasses.dataclass
class DeviceTierConfig:
    r"""DeviceTierConfig
    LINT.IfChange Configuration describing device targeting criteria for the content of an app.
    """
    
    device_groups: Optional[list[shared_devicegroup.DeviceGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceGroups') }})
    device_tier_config_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceTierConfigId') }})
    device_tier_set: Optional[shared_devicetierset.DeviceTierSet] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceTierSet') }})
    

@dataclass_json
@dataclasses.dataclass
class DeviceTierConfigInput:
    r"""DeviceTierConfigInput
    LINT.IfChange Configuration describing device targeting criteria for the content of an app.
    """
    
    device_groups: Optional[list[shared_devicegroup.DeviceGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceGroups') }})
    device_tier_set: Optional[shared_devicetierset.DeviceTierSet] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceTierSet') }})
    
