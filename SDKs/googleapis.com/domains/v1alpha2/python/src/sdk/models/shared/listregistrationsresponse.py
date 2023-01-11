import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import registration as shared_registration


@dataclass_json
@dataclasses.dataclass
class ListRegistrationsResponse:
    r"""ListRegistrationsResponse
    Response for the `ListRegistrations` method.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    registrations: Optional[list[shared_registration.Registration]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrations') }})
    
