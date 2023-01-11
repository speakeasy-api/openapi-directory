import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import eventfilter as shared_eventfilter

class PathFilterPathMatchPositionEnum(str, Enum):
    PATH_MATCH_POSITION_UNSPECIFIED = "PATH_MATCH_POSITION_UNSPECIFIED"
    ANY = "ANY"
    FIRST = "FIRST"
    LAST = "LAST"


@dataclass_json
@dataclasses.dataclass
class PathFilter:
    r"""PathFilter
    Represents a DfaReporting path filter.
    """
    
    event_filters: Optional[list[shared_eventfilter.EventFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventFilters') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    path_match_position: Optional[PathFilterPathMatchPositionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pathMatchPosition') }})
    
