import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dataexecutionstatus as shared_dataexecutionstatus
from ..shared import datasourceobjectreference as shared_datasourceobjectreference


@dataclass_json
@dataclasses.dataclass
class RefreshDataSourceObjectExecutionStatus:
    r"""RefreshDataSourceObjectExecutionStatus
    The execution status of refreshing one data source object.
    """
    
    data_execution_status: Optional[shared_dataexecutionstatus.DataExecutionStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataExecutionStatus') }})
    reference: Optional[shared_datasourceobjectreference.DataSourceObjectReference] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reference') }})
    
