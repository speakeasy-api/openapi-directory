import dataclasses
from typing import Optional
from ..shared import replicastatus as shared_replicastatus


@dataclasses.dataclass
class Replica:
    r"""Replica
    An individual Replica within a Pool. Replicas are automatically created by the replica pool, using the template provided by the user. You cannot directly create replicas.
    """
    
    name: Optional[str] = dataclasses.field(default=None)
    self_link: Optional[str] = dataclasses.field(default=None)
    status: Optional[shared_replicastatus.ReplicaStatus] = dataclasses.field(default=None)
    
