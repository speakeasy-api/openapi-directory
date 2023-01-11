import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class GetCustomPagePathParams:
    slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCustomPageSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class GetCustomPageRequest:
    path_params: GetCustomPagePathParams = dataclasses.field()
    security: GetCustomPageSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCustomPageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
