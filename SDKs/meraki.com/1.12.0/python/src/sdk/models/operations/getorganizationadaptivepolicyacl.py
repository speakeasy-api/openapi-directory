import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetOrganizationAdaptivePolicyACLPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrganizationAdaptivePolicyACLRequest:
    path_params: GetOrganizationAdaptivePolicyACLPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOrganizationAdaptivePolicyACLResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_organization_adaptive_policy_acl_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
