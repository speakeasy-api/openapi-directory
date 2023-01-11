import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import errorcode_enum as shared_errorcode_enum


@dataclass_json
@dataclasses.dataclass
class ObError1:
    error_code: shared_errorcode_enum.ErrorCodeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorCode') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Path') }})
    
