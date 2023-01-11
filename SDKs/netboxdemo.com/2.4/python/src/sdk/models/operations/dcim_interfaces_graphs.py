import dataclasses
from typing import Optional
from ..shared import interface as shared_interface


@dataclasses.dataclass
class DcimInterfacesGraphsPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimInterfacesGraphsRequest:
    path_params: DcimInterfacesGraphsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimInterfacesGraphsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    interface: Optional[shared_interface.Interface] = dataclasses.field(default=None)
    
