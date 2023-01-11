import dataclasses
from typing import Optional


@dataclasses.dataclass
class ReplicaStatus:
    r"""ReplicaStatus
    The current status of a Replica.
    """
    
    details: Optional[str] = dataclasses.field(default=None)
    state: Optional[str] = dataclasses.field(default=None)
    template_version: Optional[str] = dataclasses.field(default=None)
    vm_link: Optional[str] = dataclasses.field(default=None)
    vm_start_time: Optional[str] = dataclasses.field(default=None)
    
