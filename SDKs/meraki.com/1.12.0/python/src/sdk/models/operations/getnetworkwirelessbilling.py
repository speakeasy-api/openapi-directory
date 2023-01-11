import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkWirelessBillingPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkWirelessBillingRequest:
    path_params: GetNetworkWirelessBillingPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkWirelessBillingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_wireless_billing_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
