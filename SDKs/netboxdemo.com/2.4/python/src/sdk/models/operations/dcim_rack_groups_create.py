import dataclasses
from typing import Optional
from ..shared import writablerackgroup as shared_writablerackgroup
from ..shared import rackgroup as shared_rackgroup


@dataclasses.dataclass
class DcimRackGroupsCreateRequest:
    request: shared_writablerackgroup.WritableRackGroupInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimRackGroupsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    rack_group: Optional[shared_rackgroup.RackGroup] = dataclasses.field(default=None)
    
