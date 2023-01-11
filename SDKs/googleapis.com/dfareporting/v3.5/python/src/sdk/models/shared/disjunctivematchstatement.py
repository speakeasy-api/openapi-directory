import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import eventfilter as shared_eventfilter


@dataclass_json
@dataclasses.dataclass
class DisjunctiveMatchStatement:
    r"""DisjunctiveMatchStatement
    Represents a Disjunctive Match Statement resource, which is a conjunction (and) of disjunctive (or) boolean statements.
    """
    
    event_filters: Optional[list[shared_eventfilter.EventFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventFilters') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
