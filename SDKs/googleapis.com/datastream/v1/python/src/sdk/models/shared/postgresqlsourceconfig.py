import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import postgresqlrdbms as shared_postgresqlrdbms


@dataclass_json
@dataclasses.dataclass
class PostgresqlSourceConfig:
    r"""PostgresqlSourceConfig
    PostgreSQL data source configuration
    """
    
    exclude_objects: Optional[shared_postgresqlrdbms.PostgresqlRdbms] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludeObjects') }})
    include_objects: Optional[shared_postgresqlrdbms.PostgresqlRdbms] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeObjects') }})
    publication: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publication') }})
    replication_slot: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicationSlot') }})
    
