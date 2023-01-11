import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ExecuteSQLQueryResponse:
    r"""ExecuteSQLQueryResponse
    A response returned by the connection after executing the sql query.
    """
    
    results: Optional[list[dict[str, Any]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    
