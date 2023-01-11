import dataclasses
from typing import Optional
from ..shared import replica as shared_replica


@dataclasses.dataclass
class ReplicasListResponse:
    next_page_token: Optional[str] = dataclasses.field(default=None)
    resources: Optional[list[shared_replica.Replica]] = dataclasses.field(default=None)
    
