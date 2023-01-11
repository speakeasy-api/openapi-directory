import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mysqlreplicaconfiguration as shared_mysqlreplicaconfiguration


@dataclass_json
@dataclasses.dataclass
class ReplicaConfiguration:
    r"""ReplicaConfiguration
    Read-replica configuration for connecting to the primary instance.
    """
    
    failover_target: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failoverTarget') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    mysql_replica_configuration: Optional[shared_mysqlreplicaconfiguration.MySQLReplicaConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mysqlReplicaConfiguration') }})
    
