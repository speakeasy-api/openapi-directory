import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import queryrequestinput as shared_queryrequestinput


@dataclass_json
@dataclasses.dataclass
class QueryRequest:
    r"""QueryRequest
    Request type for the [`Query`](#google.home.graph.v1.HomeGraphApiService.Query) call.
    """
    
    agent_user_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentUserId') }})
    inputs: Optional[list[shared_queryrequestinput.QueryRequestInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputs') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    
