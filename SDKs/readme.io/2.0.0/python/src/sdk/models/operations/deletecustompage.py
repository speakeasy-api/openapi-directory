import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteCustomPagePathParams:
    slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteCustomPageSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteCustomPageRequest:
    path_params: DeleteCustomPagePathParams = dataclasses.field()
    security: DeleteCustomPageSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteCustomPageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
