import dataclasses



@dataclasses.dataclass
class DeleteNetworkApplianceVlanPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    vlan_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'vlanId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteNetworkApplianceVlanRequest:
    path_params: DeleteNetworkApplianceVlanPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteNetworkApplianceVlanResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
