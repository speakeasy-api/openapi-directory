import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlefirebaseappcheckv1service as shared_googlefirebaseappcheckv1service


@dataclass_json
@dataclasses.dataclass
class GoogleFirebaseAppcheckV1ListServicesResponse:
    r"""GoogleFirebaseAppcheckV1ListServicesResponse
    Response message for the ListServices method.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    services: Optional[list[shared_googlefirebaseappcheckv1service.GoogleFirebaseAppcheckV1Service]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('services') }})
    
