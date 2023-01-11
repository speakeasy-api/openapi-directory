import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import federation as shared_federation


@dataclass_json
@dataclasses.dataclass
class ListFederationsResponse:
    r"""ListFederationsResponse
    Response message for ListFederations
    """
    
    federations: Optional[list[shared_federation.Federation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('federations') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    unreachable: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
