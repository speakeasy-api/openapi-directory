import dataclasses



@dataclasses.dataclass
class DeleteNetworkWirelessSsidIdentityPskPathParams:
    identity_psk_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'identityPskId', 'style': 'simple', 'explode': False }})
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteNetworkWirelessSsidIdentityPskRequest:
    path_params: DeleteNetworkWirelessSsidIdentityPskPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteNetworkWirelessSsidIdentityPskResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
