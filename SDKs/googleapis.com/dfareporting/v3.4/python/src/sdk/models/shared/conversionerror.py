import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ConversionErrorCodeEnum(str, Enum):
    INVALID_ARGUMENT = "INVALID_ARGUMENT"
    INTERNAL = "INTERNAL"
    PERMISSION_DENIED = "PERMISSION_DENIED"
    NOT_FOUND = "NOT_FOUND"


@dataclass_json
@dataclasses.dataclass
class ConversionError:
    r"""ConversionError
    The error code and description for a conversion that failed to insert or update.
    """
    
    code: Optional[ConversionErrorCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    
