import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetOrganizationSmVppAccountPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    vpp_account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'vppAccountId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrganizationSmVppAccountRequest:
    path_params: GetOrganizationSmVppAccountPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOrganizationSmVppAccountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_organization_sm_vpp_account_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
