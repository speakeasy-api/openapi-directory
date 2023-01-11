import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mysqlrdbms as shared_mysqlrdbms
from ..shared import oraclerdbms as shared_oraclerdbms
from ..shared import postgresqlrdbms as shared_postgresqlrdbms


@dataclass_json
@dataclasses.dataclass
class DiscoverConnectionProfileResponse:
    r"""DiscoverConnectionProfileResponse
    Response from a discover request.
    """
    
    mysql_rdbms: Optional[shared_mysqlrdbms.MysqlRdbms] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mysqlRdbms') }})
    oracle_rdbms: Optional[shared_oraclerdbms.OracleRdbms] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oracleRdbms') }})
    postgresql_rdbms: Optional[shared_postgresqlrdbms.PostgresqlRdbms] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postgresqlRdbms') }})
    
