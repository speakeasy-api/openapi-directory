import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rollout as shared_rollout


@dataclass_json
@dataclasses.dataclass
class ListRolloutsResponse:
    r"""ListRolloutsResponse
    ListRolloutsResponse is the response object reutrned by `ListRollouts`.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    rollouts: Optional[list[shared_rollout.Rollout]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rollouts') }})
    unreachable: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
