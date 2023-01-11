import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class RestoreTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    UNTRASH = "UNTRASH"


@dataclass_json
@dataclasses.dataclass
class Restore:
    r"""Restore
    A deleted object was restored.
    """
    
    type: Optional[RestoreTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
