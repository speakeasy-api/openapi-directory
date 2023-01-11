import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetDeviceApplianceDhcpSubnetsPathParams:
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDeviceApplianceDhcpSubnetsRequest:
    path_params: GetDeviceApplianceDhcpSubnetsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDeviceApplianceDhcpSubnetsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_device_appliance_dhcp_subnets_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
