import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetOrganizationApplianceSecurityIntrusionPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrganizationApplianceSecurityIntrusionRequest:
    path_params: GetOrganizationApplianceSecurityIntrusionPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOrganizationApplianceSecurityIntrusionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_organization_appliance_security_intrusion_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
