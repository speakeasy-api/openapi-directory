import dataclasses



@dataclasses.dataclass
class DeleteNetworkSwitchQosRulePathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    qos_rule_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'qosRuleId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteNetworkSwitchQosRuleRequest:
    path_params: DeleteNetworkSwitchQosRulePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteNetworkSwitchQosRuleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
