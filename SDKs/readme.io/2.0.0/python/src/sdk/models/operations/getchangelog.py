import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class GetChangelogPathParams:
    slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetChangelogSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class GetChangelogRequest:
    path_params: GetChangelogPathParams = dataclasses.field()
    security: GetChangelogSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetChangelogResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
