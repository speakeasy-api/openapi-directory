import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import errorobject as shared_errorobject


@dataclass_json
@dataclasses.dataclass
class ErrorResponse:
    r"""ErrorResponse
    Generic error response that returns one or more errors.
    
    """
    
    errors: list[shared_errorobject.ErrorObject] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    
