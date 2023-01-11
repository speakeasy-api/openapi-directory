import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import postgresqlschema as shared_postgresqlschema


@dataclass_json
@dataclasses.dataclass
class PostgresqlRdbms:
    r"""PostgresqlRdbms
    PostgreSQL database structure.
    """
    
    postgresql_schemas: Optional[list[shared_postgresqlschema.PostgresqlSchema]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postgresqlSchemas') }})
    
