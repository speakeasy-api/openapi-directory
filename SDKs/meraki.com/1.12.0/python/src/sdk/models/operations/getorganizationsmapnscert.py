import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetOrganizationSmApnsCertPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrganizationSmApnsCertRequest:
    path_params: GetOrganizationSmApnsCertPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOrganizationSmApnsCertResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_organization_sm_apns_cert_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
