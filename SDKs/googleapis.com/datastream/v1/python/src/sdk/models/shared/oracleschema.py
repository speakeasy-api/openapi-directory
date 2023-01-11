import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import oracletable as shared_oracletable


@dataclass_json
@dataclasses.dataclass
class OracleSchema:
    r"""OracleSchema
    Oracle schema.
    """
    
    oracle_tables: Optional[list[shared_oracletable.OracleTable]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oracleTables') }})
    schema: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schema') }})
    
