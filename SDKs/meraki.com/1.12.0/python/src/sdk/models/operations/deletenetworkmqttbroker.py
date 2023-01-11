import dataclasses



@dataclasses.dataclass
class DeleteNetworkMqttBrokerPathParams:
    mqtt_broker_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'mqttBrokerId', 'style': 'simple', 'explode': False }})
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteNetworkMqttBrokerRequest:
    path_params: DeleteNetworkMqttBrokerPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteNetworkMqttBrokerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
