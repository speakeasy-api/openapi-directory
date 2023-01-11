import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetOrganizationBrandingPolicyPathParams:
    branding_policy_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'brandingPolicyId', 'style': 'simple', 'explode': False }})
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrganizationBrandingPolicyRequest:
    path_params: GetOrganizationBrandingPolicyPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOrganizationBrandingPolicyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_organization_branding_policy_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
