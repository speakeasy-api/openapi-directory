import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkPiiSmOwnersForKeyPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkPiiSmOwnersForKeyQueryParams:
    bluetooth_mac: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'bluetoothMac', 'style': 'form', 'explode': True }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    imei: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'imei', 'style': 'form', 'explode': True }})
    mac: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'mac', 'style': 'form', 'explode': True }})
    serial: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'serial', 'style': 'form', 'explode': True }})
    username: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'username', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetNetworkPiiSmOwnersForKeyRequest:
    path_params: GetNetworkPiiSmOwnersForKeyPathParams = dataclasses.field()
    query_params: GetNetworkPiiSmOwnersForKeyQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkPiiSmOwnersForKeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_pii_sm_owners_for_key_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
