import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkCellularGatewayDhcpPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkCellularGatewayDhcpRequestBody:
    dhcp_lease_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dhcpLeaseTime') }})
    dns_custom_nameservers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dnsCustomNameservers') }})
    dns_nameservers: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dnsNameservers') }})
    

@dataclasses.dataclass
class UpdateNetworkCellularGatewayDhcpRequest:
    path_params: UpdateNetworkCellularGatewayDhcpPathParams = dataclasses.field()
    request: Optional[UpdateNetworkCellularGatewayDhcpRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkCellularGatewayDhcpResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_cellular_gateway_dhcp_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
