import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import variable as shared_variable


@dataclass_json
@dataclasses.dataclass
class ListVariablesResponse:
    r"""ListVariablesResponse
    Response for the `ListVariables()` method.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    variables: Optional[list[shared_variable.Variable]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('variables') }})
    
