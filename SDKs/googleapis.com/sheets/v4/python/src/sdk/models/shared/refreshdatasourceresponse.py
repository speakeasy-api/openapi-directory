import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import refreshdatasourceobjectexecutionstatus as shared_refreshdatasourceobjectexecutionstatus


@dataclass_json
@dataclasses.dataclass
class RefreshDataSourceResponse:
    r"""RefreshDataSourceResponse
    The response from refreshing one or multiple data source objects.
    """
    
    statuses: Optional[list[shared_refreshdatasourceobjectexecutionstatus.RefreshDataSourceObjectExecutionStatus]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statuses') }})
    
