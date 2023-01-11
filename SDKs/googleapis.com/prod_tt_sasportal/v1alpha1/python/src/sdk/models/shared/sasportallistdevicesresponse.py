import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sasportaldevice as shared_sasportaldevice


@dataclass_json
@dataclasses.dataclass
class SasPortalListDevicesResponse:
    r"""SasPortalListDevicesResponse
    Response for ListDevices.
    """
    
    devices: Optional[list[shared_sasportaldevice.SasPortalDevice]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('devices') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
