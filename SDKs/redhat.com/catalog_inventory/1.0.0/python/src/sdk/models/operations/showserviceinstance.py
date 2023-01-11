import dataclasses
from typing import Optional
from ..shared import errornotfound as shared_errornotfound
from ..shared import serviceinstance as shared_serviceinstance


@dataclasses.dataclass
class ShowServiceInstancePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ShowServiceInstanceRequest:
    path_params: ShowServiceInstancePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ShowServiceInstanceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_not_found: Optional[shared_errornotfound.ErrorNotFound] = dataclasses.field(default=None)
    service_instance: Optional[shared_serviceinstance.ServiceInstance] = dataclasses.field(default=None)
    
