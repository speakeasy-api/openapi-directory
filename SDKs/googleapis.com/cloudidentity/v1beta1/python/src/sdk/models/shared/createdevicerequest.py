import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import device as shared_device


@dataclass_json
@dataclasses.dataclass
class CreateDeviceRequestInput:
    r"""CreateDeviceRequestInput
    Request message for creating a Company Owned device.
    """
    
    device: Optional[shared_device.DeviceInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('device') }})
    
