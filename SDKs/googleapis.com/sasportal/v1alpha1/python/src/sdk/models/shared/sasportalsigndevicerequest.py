import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sasportaldevice as shared_sasportaldevice


@dataclass_json
@dataclasses.dataclass
class SasPortalSignDeviceRequestInput:
    r"""SasPortalSignDeviceRequestInput
    Request for SignDevice.
    """
    
    device: Optional[shared_sasportaldevice.SasPortalDeviceInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('device') }})
    
