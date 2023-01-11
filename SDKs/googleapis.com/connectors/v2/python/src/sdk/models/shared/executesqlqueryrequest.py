import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import query as shared_query


@dataclass_json
@dataclasses.dataclass
class ExecuteSQLQueryRequest:
    r"""ExecuteSQLQueryRequest
    An execute sql query request containing the query and the connection to execute it on.
    """
    
    query: Optional[shared_query.Query] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    
