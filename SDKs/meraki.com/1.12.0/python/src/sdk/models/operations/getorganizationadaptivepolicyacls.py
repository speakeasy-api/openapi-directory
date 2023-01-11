import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetOrganizationAdaptivePolicyAclsPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrganizationAdaptivePolicyAclsRequest:
    path_params: GetOrganizationAdaptivePolicyAclsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOrganizationAdaptivePolicyAclsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_organization_adaptive_policy_acls_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
