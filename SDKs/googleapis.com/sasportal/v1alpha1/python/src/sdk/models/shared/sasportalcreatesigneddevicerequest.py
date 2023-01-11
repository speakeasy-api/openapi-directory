import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SasPortalCreateSignedDeviceRequest:
    r"""SasPortalCreateSignedDeviceRequest
    Request for CreateSignedDevice.
    """
    
    encoded_device: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encodedDevice') }})
    installer_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('installerId') }})
    
