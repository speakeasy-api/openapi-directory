import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resulttablecolumnheader as shared_resulttablecolumnheader
from ..shared import errors as shared_errors


@dataclass_json
@dataclasses.dataclass
class QueryResponse:
    r"""QueryResponse
    Response message for TargetedQueriesService.Query.
    """
    
    column_headers: Optional[list[shared_resulttablecolumnheader.ResultTableColumnHeader]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnHeaders') }})
    errors: Optional[shared_errors.Errors] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    rows: Optional[list[list[Any]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rows') }})
    
