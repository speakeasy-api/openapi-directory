import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkWirelessSsidIdentityPskPathParams:
    identity_psk_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'identityPskId', 'style': 'simple', 'explode': False }})
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkWirelessSsidIdentityPskRequest:
    path_params: GetNetworkWirelessSsidIdentityPskPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkWirelessSsidIdentityPskResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_wireless_ssid_identity_psk_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
