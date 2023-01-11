import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetOrganizationSmVppAccountsPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrganizationSmVppAccountsRequest:
    path_params: GetOrganizationSmVppAccountsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOrganizationSmVppAccountsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_organization_sm_vpp_accounts_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
