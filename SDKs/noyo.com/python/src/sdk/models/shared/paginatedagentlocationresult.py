import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import agentlocationresult as shared_agentlocationresult


@dataclass_json
@dataclasses.dataclass
class PaginatedAgentLocationResultMeta:
    r"""PaginatedAgentLocationResultMeta
    Metadata associated with the response data
    """
    
    offset: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    page_num: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_num') }})
    page_size: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    total_records: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_records') }})
    

@dataclass_json
@dataclasses.dataclass
class PaginatedAgentLocationResult:
    meta: PaginatedAgentLocationResultMeta = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    response: list[shared_agentlocationresult.AgentLocationResult] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('response') }})
    
