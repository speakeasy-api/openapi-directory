import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mysqlcolumn as shared_mysqlcolumn


@dataclass_json
@dataclasses.dataclass
class MysqlTable:
    r"""MysqlTable
    MySQL table.
    """
    
    mysql_columns: Optional[list[shared_mysqlcolumn.MysqlColumn]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mysqlColumns') }})
    table_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableName') }})
    
