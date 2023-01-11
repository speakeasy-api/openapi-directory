import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import filtercriteria as shared_filtercriteria
from ..shared import filterspec as shared_filterspec
from ..shared import gridrange as shared_gridrange
from ..shared import sortspec as shared_sortspec


@dataclass_json
@dataclasses.dataclass
class FilterView:
    r"""FilterView
    A filter view.
    """
    
    criteria: Optional[dict[str, shared_filtercriteria.FilterCriteria]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('criteria') }})
    filter_specs: Optional[list[shared_filterspec.FilterSpec]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterSpecs') }})
    filter_view_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterViewId') }})
    named_range_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namedRangeId') }})
    range: Optional[shared_gridrange.GridRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    sort_specs: Optional[list[shared_sortspec.SortSpec]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortSpecs') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
