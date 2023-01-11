import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class PutNotificationsV3RegistrationChannelIDPathParams:
    channel_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'channelId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutNotificationsV3RegistrationChannelIDHeaders:
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    
class PutNotificationsV3RegistrationChannelIDRequestBodyChannelTypeEnum(str, Enum):
    WEBHOOK = "webhook"

class PutNotificationsV3RegistrationChannelIDRequestBodyEventSourceEnum(str, Enum):
    ATTACH = "attach"
    BATTERY = "battery"
    GEOFENCE = "geofence"
    HUMIDITY = "humidity"
    PRESSURE = "pressure"
    TAMPER = "tamper"
    TEMPERATURE = "temperature"
    ACCELERATION = "acceleration"
    DWELLING = "dwelling"
    STOCK = "stock"
    DETENTION = "detention"
    UTILIZATION = "utilization"

class PutNotificationsV3RegistrationChannelIDRequestBodyEventTypeEnum(str, Enum):
    BELOW_RANGE = "BELOW_RANGE"
    IN_RANGE = "IN_RANGE"
    ABOVE_RANGE = "ABOVE_RANGE"
    FALSE_TO_TRUE = "FALSE_TO_TRUE"
    TRUE_TO_FALSE = "TRUE_TO_FALSE"
    EVENT = "EVENT"
    INSIDE_GEOFENCE = "INSIDE_GEOFENCE"
    OUTSIDE_GEOFENCE = "OUTSIDE_GEOFENCE"
    OVERSTOCK = "OVERSTOCK"
    NORMAL_VOLUME = "NORMAL_VOLUME"
    UNDERSTOCK = "UNDERSTOCK"
    DWELLING_STARTED = "DWELLING_STARTED"
    DWELLING_ENDED = "DWELLING_ENDED"
    DETENTION_STARTED = "DETENTION_STARTED"
    DETENTION_ENDED = "DETENTION_ENDED"
    UTILIZED = "UTILIZED"
    UNUTILIZED = "UNUTILIZED"


@dataclass_json
@dataclasses.dataclass
class PutNotificationsV3RegistrationChannelIDRequestBody:
    channel_type: PutNotificationsV3RegistrationChannelIDRequestBodyChannelTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelType') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    event_source: Optional[PutNotificationsV3RegistrationChannelIDRequestBodyEventSourceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventSource') }})
    event_type: Optional[PutNotificationsV3RegistrationChannelIDRequestBodyEventTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventType') }})
    initial_state: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initialState') }})
    rule_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleId') }})
    

@dataclasses.dataclass
class PutNotificationsV3RegistrationChannelIDSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
class PutNotificationsV3RegistrationChannelID200ApplicationJSONRegistrationChannelTypeEnum(str, Enum):
    WEBHOOK = "webhook"

class PutNotificationsV3RegistrationChannelID200ApplicationJSONRegistrationEventSourceEnum(str, Enum):
    ATTACH = "attach"
    BATTERY = "battery"
    GEOFENCE = "geofence"
    HUMIDITY = "humidity"
    PRESSURE = "pressure"
    TAMPER = "tamper"
    TEMPERATURE = "temperature"
    ACCELERATION = "acceleration"
    DWELLING = "dwelling"
    STOCK = "stock"
    DETENTION = "detention"
    UTILIZATION = "utilization"

class PutNotificationsV3RegistrationChannelID200ApplicationJSONRegistrationEventTypeEnum(str, Enum):
    BELOW_RANGE = "BELOW_RANGE"
    IN_RANGE = "IN_RANGE"
    ABOVE_RANGE = "ABOVE_RANGE"
    FALSE_TO_TRUE = "FALSE_TO_TRUE"
    TRUE_TO_FALSE = "TRUE_TO_FALSE"
    EVENT = "EVENT"
    INSIDE_GEOFENCE = "INSIDE_GEOFENCE"
    OUTSIDE_GEOFENCE = "OUTSIDE_GEOFENCE"
    OVERSTOCK = "OVERSTOCK"
    NORMAL_VOLUME = "NORMAL_VOLUME"
    UNDERSTOCK = "UNDERSTOCK"
    DWELLING_STARTED = "DWELLING_STARTED"
    DWELLING_ENDED = "DWELLING_ENDED"
    DETENTION_STARTED = "DETENTION_STARTED"
    DETENTION_ENDED = "DETENTION_ENDED"
    UTILIZED = "UTILIZED"
    UNUTILIZED = "UNUTILIZED"


@dataclass_json
@dataclasses.dataclass
class PutNotificationsV3RegistrationChannelID200ApplicationJSONRegistration:
    channel_type: PutNotificationsV3RegistrationChannelID200ApplicationJSONRegistrationChannelTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelType') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    channel_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelId') }})
    event_source: Optional[PutNotificationsV3RegistrationChannelID200ApplicationJSONRegistrationEventSourceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventSource') }})
    event_type: Optional[PutNotificationsV3RegistrationChannelID200ApplicationJSONRegistrationEventTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventType') }})
    initial_state: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initialState') }})
    rule_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleId') }})
    

@dataclass_json
@dataclasses.dataclass
class PutNotificationsV3RegistrationChannelID200ApplicationJSON:
    registration: Optional[PutNotificationsV3RegistrationChannelID200ApplicationJSONRegistration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registration') }})
    

@dataclass_json
@dataclasses.dataclass
class PutNotificationsV3RegistrationChannelID400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PutNotificationsV3RegistrationChannelID401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PutNotificationsV3RegistrationChannelID403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PutNotificationsV3RegistrationChannelID404ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PutNotificationsV3RegistrationChannelID409ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class PutNotificationsV3RegistrationChannelIDRequest:
    headers: PutNotificationsV3RegistrationChannelIDHeaders = dataclasses.field()
    path_params: PutNotificationsV3RegistrationChannelIDPathParams = dataclasses.field()
    request: PutNotificationsV3RegistrationChannelIDRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PutNotificationsV3RegistrationChannelIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PutNotificationsV3RegistrationChannelIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    put_notifications_v3_registration_channel_id_200_application_json_object: Optional[PutNotificationsV3RegistrationChannelID200ApplicationJSON] = dataclasses.field(default=None)
    put_notifications_v3_registration_channel_id_400_application_json_object: Optional[PutNotificationsV3RegistrationChannelID400ApplicationJSON] = dataclasses.field(default=None)
    put_notifications_v3_registration_channel_id_401_application_json_object: Optional[PutNotificationsV3RegistrationChannelID401ApplicationJSON] = dataclasses.field(default=None)
    put_notifications_v3_registration_channel_id_403_application_json_object: Optional[PutNotificationsV3RegistrationChannelID403ApplicationJSON] = dataclasses.field(default=None)
    put_notifications_v3_registration_channel_id_404_application_json_object: Optional[PutNotificationsV3RegistrationChannelID404ApplicationJSON] = dataclasses.field(default=None)
    put_notifications_v3_registration_channel_id_409_application_json_object: Optional[PutNotificationsV3RegistrationChannelID409ApplicationJSON] = dataclasses.field(default=None)
    
