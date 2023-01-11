import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import applicationvalidationerror as shared_applicationvalidationerror


@dataclass_json
@dataclasses.dataclass
class ApplicationValidationResult:
    validation_errors: list[shared_applicationvalidationerror.ApplicationValidationError] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('validation_errors') }})
    
