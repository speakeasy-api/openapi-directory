import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkMqttBrokerPathParams:
    mqtt_broker_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'mqttBrokerId', 'style': 'simple', 'explode': False }})
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkMqttBrokerRequestBody:
    host: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    

@dataclasses.dataclass
class UpdateNetworkMqttBrokerRequest:
    path_params: UpdateNetworkMqttBrokerPathParams = dataclasses.field()
    request: Optional[UpdateNetworkMqttBrokerRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkMqttBrokerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_mqtt_broker_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
