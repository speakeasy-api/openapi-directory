import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteAPISpecificationPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteAPISpecificationSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteAPISpecificationRequest:
    path_params: DeleteAPISpecificationPathParams = dataclasses.field()
    security: DeleteAPISpecificationSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteAPISpecificationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
