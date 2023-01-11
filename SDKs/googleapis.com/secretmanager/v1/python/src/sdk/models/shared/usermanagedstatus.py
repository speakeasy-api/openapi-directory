import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import replicastatus as shared_replicastatus


@dataclass_json
@dataclasses.dataclass
class UserManagedStatus:
    r"""UserManagedStatus
    The replication status of a SecretVersion using user-managed replication. Only populated if the parent Secret has a user-managed replication policy.
    """
    
    replicas: Optional[list[shared_replicastatus.ReplicaStatus]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicas') }})
    
