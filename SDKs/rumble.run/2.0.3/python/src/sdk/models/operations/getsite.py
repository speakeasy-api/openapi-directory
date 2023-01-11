import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import site as shared_site


@dataclasses.dataclass
class GetSitePathParams:
    site_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'site_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSiteSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class GetSiteRequest:
    path_params: GetSitePathParams = dataclasses.field()
    security: GetSiteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetSiteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    site: Optional[shared_site.Site] = dataclasses.field(default=None)
    
