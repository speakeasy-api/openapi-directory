import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkMqttBrokerPathParams:
    mqtt_broker_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'mqttBrokerId', 'style': 'simple', 'explode': False }})
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkMqttBrokerRequest:
    path_params: GetNetworkMqttBrokerPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkMqttBrokerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_mqtt_broker_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
