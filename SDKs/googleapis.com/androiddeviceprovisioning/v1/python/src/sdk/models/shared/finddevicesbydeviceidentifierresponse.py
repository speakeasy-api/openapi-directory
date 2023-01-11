import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import device as shared_device


@dataclass_json
@dataclasses.dataclass
class FindDevicesByDeviceIdentifierResponse:
    r"""FindDevicesByDeviceIdentifierResponse
    Response containing found devices.
    """
    
    devices: Optional[list[shared_device.Device]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('devices') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    total_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSize') }})
    
