import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mysqlrdbms as shared_mysqlrdbms
from ..shared import oraclerdbms as shared_oraclerdbms


@dataclass_json
@dataclasses.dataclass
class BackfillAllStrategy:
    r"""BackfillAllStrategy
    Backfill strategy to automatically backfill the Stream's objects. Specific objects can be excluded.
    """
    
    mysql_excluded_objects: Optional[shared_mysqlrdbms.MysqlRdbms] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mysqlExcludedObjects') }})
    oracle_excluded_objects: Optional[shared_oraclerdbms.OracleRdbms] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oracleExcludedObjects') }})
    
