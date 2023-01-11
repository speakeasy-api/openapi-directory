import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PathQueryOptionsFilterMatchEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    EXACT = "EXACT"
    PARTIAL = "PARTIAL"
    BEGINS_WITH = "BEGINS_WITH"
    WILDCARD_EXPRESSION = "WILDCARD_EXPRESSION"


@dataclass_json
@dataclasses.dataclass
class PathQueryOptionsFilter:
    r"""PathQueryOptionsFilter
    Dimension filter on path events.
    """
    
    filter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    match: Optional[PathQueryOptionsFilterMatchEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('match') }})
    values: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
