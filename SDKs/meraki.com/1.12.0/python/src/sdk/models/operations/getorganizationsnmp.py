import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetOrganizationSnmpPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrganizationSnmpRequest:
    path_params: GetOrganizationSnmpPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOrganizationSnmpResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_organization_snmp_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
