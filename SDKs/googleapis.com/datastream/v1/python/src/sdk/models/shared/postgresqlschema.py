import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import postgresqltable as shared_postgresqltable


@dataclass_json
@dataclasses.dataclass
class PostgresqlSchema:
    r"""PostgresqlSchema
    PostgreSQL schema.
    """
    
    postgresql_tables: Optional[list[shared_postgresqltable.PostgresqlTable]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postgresqlTables') }})
    schema: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schema') }})
    
