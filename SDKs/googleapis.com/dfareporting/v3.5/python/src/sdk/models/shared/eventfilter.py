import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pathreportdimensionvalue as shared_pathreportdimensionvalue


@dataclass_json
@dataclasses.dataclass
class EventFilter:
    r"""EventFilter
    Represents a DfaReporting event filter.
    """
    
    dimension_filter: Optional[shared_pathreportdimensionvalue.PathReportDimensionValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionFilter') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
