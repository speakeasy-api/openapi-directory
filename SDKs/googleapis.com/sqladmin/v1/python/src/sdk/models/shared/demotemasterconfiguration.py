import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import demotemastermysqlreplicaconfiguration as shared_demotemastermysqlreplicaconfiguration


@dataclass_json
@dataclasses.dataclass
class DemoteMasterConfiguration:
    r"""DemoteMasterConfiguration
    Read-replica configuration for connecting to the on-premises primary instance.
    """
    
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    mysql_replica_configuration: Optional[shared_demotemastermysqlreplicaconfiguration.DemoteMasterMySQLReplicaConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mysqlReplicaConfiguration') }})
    
