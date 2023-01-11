import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import responseheader as shared_responseheader
from ..shared import policy as shared_policy


@dataclass_json
@dataclasses.dataclass
class PoliciesListResponse:
    header: Optional[shared_responseheader.ResponseHeader] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('header') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    policies: Optional[list[shared_policy.Policy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policies') }})
    
