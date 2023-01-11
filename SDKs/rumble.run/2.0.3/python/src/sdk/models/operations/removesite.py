import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class RemoveSitePathParams:
    site_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'site_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RemoveSiteSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class RemoveSiteRequest:
    path_params: RemoveSitePathParams = dataclasses.field()
    security: RemoveSiteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class RemoveSiteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
