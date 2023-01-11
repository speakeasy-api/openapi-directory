import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deviceregistry as shared_deviceregistry


@dataclass_json
@dataclasses.dataclass
class ListDeviceRegistriesResponse:
    r"""ListDeviceRegistriesResponse
    Response for `ListDeviceRegistries`.
    """
    
    device_registries: Optional[list[shared_deviceregistry.DeviceRegistry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceRegistries') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
