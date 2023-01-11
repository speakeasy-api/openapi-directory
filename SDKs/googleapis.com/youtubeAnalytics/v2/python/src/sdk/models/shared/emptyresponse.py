import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import errors as shared_errors


@dataclass_json
@dataclasses.dataclass
class EmptyResponse:
    r"""EmptyResponse
    Empty response.
    """
    
    errors: Optional[shared_errors.Errors] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    
