import dataclasses
from typing import Optional
from ..shared import virtualchassis as shared_virtualchassis


@dataclasses.dataclass
class DcimVirtualChassisReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimVirtualChassisReadRequest:
    path_params: DcimVirtualChassisReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimVirtualChassisReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    virtual_chassis: Optional[shared_virtualchassis.VirtualChassis] = dataclasses.field(default=None)
    
