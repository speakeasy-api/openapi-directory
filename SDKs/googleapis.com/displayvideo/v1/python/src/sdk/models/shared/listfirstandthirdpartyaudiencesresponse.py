import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import firstandthirdpartyaudience as shared_firstandthirdpartyaudience


@dataclass_json
@dataclasses.dataclass
class ListFirstAndThirdPartyAudiencesResponse:
    first_and_third_party_audiences: Optional[list[shared_firstandthirdpartyaudience.FirstAndThirdPartyAudience]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstAndThirdPartyAudiences') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
