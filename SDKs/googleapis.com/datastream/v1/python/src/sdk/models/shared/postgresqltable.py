import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import postgresqlcolumn as shared_postgresqlcolumn


@dataclass_json
@dataclasses.dataclass
class PostgresqlTable:
    r"""PostgresqlTable
    PostgreSQL table.
    """
    
    postgresql_columns: Optional[list[shared_postgresqlcolumn.PostgresqlColumn]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postgresqlColumns') }})
    table: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('table') }})
    
