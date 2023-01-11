import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deviceram as shared_deviceram
from ..shared import deviceid as shared_deviceid
from ..shared import systemfeature as shared_systemfeature


@dataclass_json
@dataclasses.dataclass
class DeviceSelector:
    r"""DeviceSelector
    Selector for a device group. A selector consists of a set of conditions on the device that should all match (logical AND) to determine a device group eligibility. For instance, if a selector specifies RAM conditions, device model inclusion and device model exclusion, a device is considered to match if: device matches RAM conditions AND device matches one of the included device models AND device doesn't match excluded device models
    """
    
    device_ram: Optional[shared_deviceram.DeviceRAM] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceRam') }})
    excluded_device_ids: Optional[list[shared_deviceid.DeviceID]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludedDeviceIds') }})
    forbidden_system_features: Optional[list[shared_systemfeature.SystemFeature]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forbiddenSystemFeatures') }})
    included_device_ids: Optional[list[shared_deviceid.DeviceID]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includedDeviceIds') }})
    required_system_features: Optional[list[shared_systemfeature.SystemFeature]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requiredSystemFeatures') }})
    
