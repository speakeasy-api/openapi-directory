import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetOrganizationBrandingPoliciesPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrganizationBrandingPoliciesRequest:
    path_params: GetOrganizationBrandingPoliciesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOrganizationBrandingPoliciesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_organization_branding_policies_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
