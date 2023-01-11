import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteChangelogPathParams:
    slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteChangelogSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteChangelogRequest:
    path_params: DeleteChangelogPathParams = dataclasses.field()
    security: DeleteChangelogSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteChangelogResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
