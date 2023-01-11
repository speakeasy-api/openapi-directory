import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mysqldatabase as shared_mysqldatabase


@dataclass_json
@dataclasses.dataclass
class MysqlRdbms:
    r"""MysqlRdbms
    MySQL database structure
    """
    
    mysql_databases: Optional[list[shared_mysqldatabase.MysqlDatabase]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mysqlDatabases') }})
    
