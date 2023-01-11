import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import errormessage as shared_errormessage


@dataclass_json
@dataclasses.dataclass
class APIError:
    r"""APIError
    API invocation or processing error
    """
    
    errors: list[shared_errormessage.ErrorMessage] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    
