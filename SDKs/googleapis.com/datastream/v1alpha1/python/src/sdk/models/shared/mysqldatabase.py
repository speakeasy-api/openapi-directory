import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mysqltable as shared_mysqltable


@dataclass_json
@dataclasses.dataclass
class MysqlDatabase:
    r"""MysqlDatabase
    MySQL database.
    """
    
    database_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('databaseName') }})
    mysql_tables: Optional[list[shared_mysqltable.MysqlTable]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mysqlTables') }})
    
