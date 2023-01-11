import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import demotemasterconfiguration as shared_demotemasterconfiguration


@dataclass_json
@dataclasses.dataclass
class DemoteMasterContext:
    r"""DemoteMasterContext
    Database instance demote primary instance context.
    """
    
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    master_instance_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('masterInstanceName') }})
    replica_configuration: Optional[shared_demotemasterconfiguration.DemoteMasterConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicaConfiguration') }})
    skip_replication_setup: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skipReplicationSetup') }})
    verify_gtid_consistency: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verifyGtidConsistency') }})
    
