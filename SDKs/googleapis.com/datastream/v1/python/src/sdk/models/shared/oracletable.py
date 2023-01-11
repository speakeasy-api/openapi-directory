import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import oraclecolumn as shared_oraclecolumn


@dataclass_json
@dataclasses.dataclass
class OracleTable:
    r"""OracleTable
    Oracle table.
    """
    
    oracle_columns: Optional[list[shared_oraclecolumn.OracleColumn]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oracleColumns') }})
    table: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('table') }})
    
