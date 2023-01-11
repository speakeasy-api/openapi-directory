import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dataexecutionstatus as shared_dataexecutionstatus


@dataclass_json
@dataclasses.dataclass
class DataSourceChartProperties:
    r"""DataSourceChartProperties
    Properties of a data source chart.
    """
    
    data_execution_status: Optional[shared_dataexecutionstatus.DataExecutionStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataExecutionStatus') }})
    data_source_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceId') }})
    
