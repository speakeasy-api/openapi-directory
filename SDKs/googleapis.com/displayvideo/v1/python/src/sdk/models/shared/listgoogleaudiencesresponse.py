import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleaudience as shared_googleaudience


@dataclass_json
@dataclasses.dataclass
class ListGoogleAudiencesResponse:
    google_audiences: Optional[list[shared_googleaudience.GoogleAudience]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleAudiences') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
