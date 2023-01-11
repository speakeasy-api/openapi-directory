import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import error_code_enum as shared_error_code_enum
from ..shared import error_source_enum as shared_error_source_enum
from ..shared import error_type_enum as shared_error_type_enum


@dataclass_json
@dataclasses.dataclass
class Error:
    r"""Error
    The error structure that gets returned with almost all failed API calls
    
    """
    
    error_code: shared_error_code_enum.ErrorCodeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_code') }})
    error_source: shared_error_source_enum.ErrorSourceEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_source') }})
    error_type: shared_error_type_enum.ErrorTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_type') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    
