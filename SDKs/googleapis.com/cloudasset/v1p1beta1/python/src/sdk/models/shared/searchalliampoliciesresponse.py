import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import iampolicysearchresult as shared_iampolicysearchresult


@dataclass_json
@dataclasses.dataclass
class SearchAllIamPoliciesResponse:
    r"""SearchAllIamPoliciesResponse
    Search all IAM policies response.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    results: Optional[list[shared_iampolicysearchresult.IamPolicySearchResult]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    
