import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import case as shared_case


@dataclass_json
@dataclasses.dataclass
class ListCasesResponse:
    r"""ListCasesResponse
    The response message for the ListCases endpoint.
    """
    
    cases: Optional[list[shared_case.Case]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cases') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
