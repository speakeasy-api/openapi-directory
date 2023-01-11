import dataclasses
from typing import Optional
from ..shared import service as shared_service


@dataclasses.dataclass
class IpamServicesReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class IpamServicesReadRequest:
    path_params: IpamServicesReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class IpamServicesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    service: Optional[shared_service.Service] = dataclasses.field(default=None)
    
