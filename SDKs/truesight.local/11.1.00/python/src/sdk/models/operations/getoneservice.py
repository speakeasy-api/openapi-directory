import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetOneServicePathParams:
    service_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOneServiceRequest:
    path_params: GetOneServicePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOneServiceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
