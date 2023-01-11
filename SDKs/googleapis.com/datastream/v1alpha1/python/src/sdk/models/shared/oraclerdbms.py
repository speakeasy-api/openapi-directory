import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import oracleschema as shared_oracleschema


@dataclass_json
@dataclasses.dataclass
class OracleRdbms:
    r"""OracleRdbms
    Oracle database structure.
    """
    
    oracle_schemas: Optional[list[shared_oracleschema.OracleSchema]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oracleSchemas') }})
    
