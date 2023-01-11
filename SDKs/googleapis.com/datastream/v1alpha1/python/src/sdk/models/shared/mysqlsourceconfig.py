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
    
    allowlist: Optional[shared_mysqlrdbms.MysqlRdbms] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowlist') }})
    rejectlist: Optional[shared_mysqlrdbms.MysqlRdbms] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rejectlist') }})
    
