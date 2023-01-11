import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkMqttBrokersPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkMqttBrokersRequest:
    path_params: GetNetworkMqttBrokersPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkMqttBrokersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_mqtt_brokers_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
