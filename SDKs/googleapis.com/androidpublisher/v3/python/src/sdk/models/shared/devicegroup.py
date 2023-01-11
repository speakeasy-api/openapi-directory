import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deviceselector as shared_deviceselector


@dataclass_json
@dataclasses.dataclass
class DeviceGroup:
    r"""DeviceGroup
    LINT.IfChange A group of devices. A group is defined by a set of device selectors. A device belongs to the group if it matches any selector (logical OR).
    """
    
    device_selectors: Optional[list[shared_deviceselector.DeviceSelector]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceSelectors') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
