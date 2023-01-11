import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import serviceperimeter as shared_serviceperimeter


@dataclass_json
@dataclasses.dataclass
class ListServicePerimetersResponse:
    r"""ListServicePerimetersResponse
    A response to `ListServicePerimetersRequest`.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    service_perimeters: Optional[list[shared_serviceperimeter.ServicePerimeter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('servicePerimeters') }})
    
