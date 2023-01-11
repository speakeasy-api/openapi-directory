import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dataexecutionstatus as shared_dataexecutionstatus
from ..shared import datasource as shared_datasource


@dataclass_json
@dataclasses.dataclass
class UpdateDataSourceResponse:
    r"""UpdateDataSourceResponse
    The response from updating data source.
    """
    
    data_execution_status: Optional[shared_dataexecutionstatus.DataExecutionStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataExecutionStatus') }})
    data_source: Optional[shared_datasource.DataSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSource') }})
    
