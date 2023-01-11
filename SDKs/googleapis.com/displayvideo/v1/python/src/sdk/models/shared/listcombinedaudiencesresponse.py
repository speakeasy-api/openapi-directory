import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import combinedaudience as shared_combinedaudience


@dataclass_json
@dataclasses.dataclass
class ListCombinedAudiencesResponse:
    combined_audiences: Optional[list[shared_combinedaudience.CombinedAudience]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('combinedAudiences') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
