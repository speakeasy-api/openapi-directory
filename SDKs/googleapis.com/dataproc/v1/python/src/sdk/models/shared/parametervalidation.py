import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import regexvalidation as shared_regexvalidation
from ..shared import valuevalidation as shared_valuevalidation


@dataclass_json
@dataclasses.dataclass
class ParameterValidation:
    r"""ParameterValidation
    Configuration for parameter validation.
    """
    
    regex: Optional[shared_regexvalidation.RegexValidation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regex') }})
    values: Optional[shared_valuevalidation.ValueValidation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
