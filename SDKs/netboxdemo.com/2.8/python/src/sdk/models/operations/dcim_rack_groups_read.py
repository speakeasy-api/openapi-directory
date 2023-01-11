import dataclasses
from typing import Optional
from ..shared import rackgroup as shared_rackgroup


@dataclasses.dataclass
class DcimRackGroupsReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimRackGroupsReadRequest:
    path_params: DcimRackGroupsReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimRackGroupsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    rack_group: Optional[shared_rackgroup.RackGroup] = dataclasses.field(default=None)
    
