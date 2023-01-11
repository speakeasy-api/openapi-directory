import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlefirebaseappcheckv1betaservice as shared_googlefirebaseappcheckv1betaservice


@dataclass_json
@dataclasses.dataclass
class GoogleFirebaseAppcheckV1betaListServicesResponse:
    r"""GoogleFirebaseAppcheckV1betaListServicesResponse
    Response message for the ListServices method.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    services: Optional[list[shared_googlefirebaseappcheckv1betaservice.GoogleFirebaseAppcheckV1betaService]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('services') }})
    
