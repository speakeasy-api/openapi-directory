import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ErrorModelErrorModelErrorCategoryEnum(str, Enum):
    GENERAL = "General"
    NOT_FOUND = "NotFound"
    NOT_AUTHORISED = "NotAuthorised"
    VALIDATION_FAILURE = "ValidationFailure"


@dataclass_json
@dataclasses.dataclass
class ErrorModelErrorModelErrors:
    r"""ErrorModelErrorModelErrors
    The error models' errors
    """
    
    error: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Error') }})
    

@dataclass_json
@dataclasses.dataclass
class ErrorModelErrorModel:
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    error_category: Optional[ErrorModelErrorModelErrorCategoryEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorCategory') }})
    errors: Optional[ErrorModelErrorModelErrors] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Errors') }})
    

@dataclass_json
@dataclasses.dataclass
class ErrorModel:
    error_model: Optional[ErrorModelErrorModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorModel') }})
    
