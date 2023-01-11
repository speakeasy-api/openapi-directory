import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteSwaggerPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteSwaggerSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteSwaggerRequest:
    path_params: DeleteSwaggerPathParams = dataclasses.field()
    security: DeleteSwaggerSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteSwaggerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
