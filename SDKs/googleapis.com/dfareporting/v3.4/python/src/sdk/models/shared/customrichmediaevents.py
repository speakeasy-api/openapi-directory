import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dimensionvalue as shared_dimensionvalue


@dataclass_json
@dataclasses.dataclass
class CustomRichMediaEvents:
    r"""CustomRichMediaEvents
    Represents a Custom Rich Media Events group.
    """
    
    filtered_event_ids: Optional[list[shared_dimensionvalue.DimensionValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filteredEventIds') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
