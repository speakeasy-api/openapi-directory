import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mysqlrdbms as shared_mysqlrdbms
from ..shared import oraclerdbms as shared_oraclerdbms


@dataclass_json
@dataclasses.dataclass
class DiscoverConnectionProfileResponse:
    mysql_rdbms: Optional[shared_mysqlrdbms.MysqlRdbms] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mysqlRdbms') }})
    oracle_rdbms: Optional[shared_oraclerdbms.OracleRdbms] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oracleRdbms') }})
    
