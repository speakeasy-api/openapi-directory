import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import function as shared_function


@dataclass_json
@dataclasses.dataclass
class ListFunctionsResponse:
    r"""ListFunctionsResponse
    Response for the `ListFunctions` method.
    """
    
    functions: Optional[list[shared_function.Function]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('functions') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    unreachable: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
