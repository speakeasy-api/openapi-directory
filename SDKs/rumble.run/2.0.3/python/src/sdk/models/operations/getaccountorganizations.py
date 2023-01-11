import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import organization as shared_organization


@dataclasses.dataclass
class GetAccountOrganizationsQueryParams:
    search: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAccountOrganizationsSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class GetAccountOrganizationsRequest:
    query_params: GetAccountOrganizationsQueryParams = dataclasses.field()
    security: GetAccountOrganizationsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAccountOrganizationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    organizations: Optional[list[shared_organization.Organization]] = dataclasses.field(default=None)
    
