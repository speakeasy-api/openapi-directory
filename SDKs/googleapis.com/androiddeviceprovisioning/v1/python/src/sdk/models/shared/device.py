import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deviceclaim as shared_deviceclaim
from ..shared import deviceidentifier as shared_deviceidentifier
from ..shared import devicemetadata as shared_devicemetadata


@dataclass_json
@dataclasses.dataclass
class Device:
    r"""Device
    An Android or Chrome OS device registered for zero-touch enrollment.
    """
    
    claims: Optional[list[shared_deviceclaim.DeviceClaim]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('claims') }})
    configuration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configuration') }})
    device_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceId') }})
    device_identifier: Optional[shared_deviceidentifier.DeviceIdentifier] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceIdentifier') }})
    device_metadata: Optional[shared_devicemetadata.DeviceMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceMetadata') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
