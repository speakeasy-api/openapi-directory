import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import site as shared_site


@dataclasses.dataclass
class GetAccountSitesQueryParams:
    search: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAccountSitesSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class GetAccountSitesRequest:
    query_params: GetAccountSitesQueryParams = dataclasses.field()
    security: GetAccountSitesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAccountSitesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    sites: Optional[list[shared_site.Site]] = dataclasses.field(default=None)
    
