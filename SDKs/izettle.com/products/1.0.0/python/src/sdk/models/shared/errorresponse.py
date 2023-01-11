import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import constraintviolation as shared_constraintviolation


@dataclass_json
@dataclasses.dataclass
class ErrorResponse:
    developer_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('developerMessage') }})
    error_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorType') }})
    violations: Optional[list[shared_constraintviolation.ConstraintViolation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('violations') }})
    
