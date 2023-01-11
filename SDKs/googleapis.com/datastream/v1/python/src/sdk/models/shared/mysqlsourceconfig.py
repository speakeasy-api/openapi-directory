import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mysqlrdbms as shared_mysqlrdbms


@dataclass_json
@dataclasses.dataclass
class MysqlSourceConfig:
    r"""MysqlSourceConfig
    MySQL source configuration
    """
    
    exclude_objects: Optional[shared_mysqlrdbms.MysqlRdbms] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludeObjects') }})
    include_objects: Optional[shared_mysqlrdbms.MysqlRdbms] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeObjects') }})
    max_concurrent_cdc_tasks: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxConcurrentCdcTasks') }})
    
