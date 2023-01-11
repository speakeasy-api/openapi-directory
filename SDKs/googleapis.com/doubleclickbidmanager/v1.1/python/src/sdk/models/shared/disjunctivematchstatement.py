import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import eventfilter as shared_eventfilter


@dataclass_json
@dataclasses.dataclass
class DisjunctiveMatchStatement:
    r"""DisjunctiveMatchStatement
    DisjunctiveMatchStatement that OR's all contained filters.
    """
    
    event_filters: Optional[list[shared_eventfilter.EventFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventFilters') }})
    
