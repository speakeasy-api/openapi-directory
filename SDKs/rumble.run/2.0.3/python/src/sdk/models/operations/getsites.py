import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import site as shared_site


@dataclasses.dataclass
class GetSitesSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class GetSitesRequest:
    security: GetSitesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetSitesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    sites: Optional[list[shared_site.Site]] = dataclasses.field(default=None)
    
