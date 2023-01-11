import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pivotgroup as shared_pivotgroup
from ..shared import pivotfiltercriteria as shared_pivotfiltercriteria
from ..shared import dataexecutionstatus as shared_dataexecutionstatus
from ..shared import pivotfilterspec as shared_pivotfilterspec
from ..shared import gridrange as shared_gridrange
from ..shared import pivotvalue as shared_pivotvalue

class PivotTableValueLayoutEnum(str, Enum):
    HORIZONTAL = "HORIZONTAL"
    VERTICAL = "VERTICAL"


@dataclass_json
@dataclasses.dataclass
class PivotTable:
    r"""PivotTable
    A pivot table.
    """
    
    columns: Optional[list[shared_pivotgroup.PivotGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columns') }})
    criteria: Optional[dict[str, shared_pivotfiltercriteria.PivotFilterCriteria]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('criteria') }})
    data_execution_status: Optional[shared_dataexecutionstatus.DataExecutionStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataExecutionStatus') }})
    data_source_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceId') }})
    filter_specs: Optional[list[shared_pivotfilterspec.PivotFilterSpec]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterSpecs') }})
    rows: Optional[list[shared_pivotgroup.PivotGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rows') }})
    source: Optional[shared_gridrange.GridRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    value_layout: Optional[PivotTableValueLayoutEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueLayout') }})
    values: Optional[list[shared_pivotvalue.PivotValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
