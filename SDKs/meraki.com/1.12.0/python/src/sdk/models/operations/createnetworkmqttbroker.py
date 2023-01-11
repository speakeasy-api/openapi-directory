import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class CreateNetworkMqttBrokerPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateNetworkMqttBrokerRequestBody:
    host: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    port: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    

@dataclasses.dataclass
class CreateNetworkMqttBrokerRequest:
    path_params: CreateNetworkMqttBrokerPathParams = dataclasses.field()
    request: CreateNetworkMqttBrokerRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateNetworkMqttBrokerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_network_mqtt_broker_201_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
