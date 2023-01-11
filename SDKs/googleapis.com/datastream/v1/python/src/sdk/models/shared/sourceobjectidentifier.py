import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mysqlobjectidentifier as shared_mysqlobjectidentifier
from ..shared import oracleobjectidentifier as shared_oracleobjectidentifier
from ..shared import postgresqlobjectidentifier as shared_postgresqlobjectidentifier


@dataclass_json
@dataclasses.dataclass
class SourceObjectIdentifier:
    r"""SourceObjectIdentifier
    Represents an identifier of an object in the data source.
    """
    
    mysql_identifier: Optional[shared_mysqlobjectidentifier.MysqlObjectIdentifier] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mysqlIdentifier') }})
    oracle_identifier: Optional[shared_oracleobjectidentifier.OracleObjectIdentifier] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oracleIdentifier') }})
    postgresql_identifier: Optional[shared_postgresqlobjectidentifier.PostgresqlObjectIdentifier] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postgresqlIdentifier') }})
    
