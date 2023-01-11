import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class PostNotificationsV3RegistrationsQueryParams:
    project_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'projectId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostNotificationsV3RegistrationsHeaders:
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    
class PostNotificationsV3RegistrationsRequestBodyChannelTypeEnum(str, Enum):
    WEBHOOK = "webhook"

class PostNotificationsV3RegistrationsRequestBodyEventSourceEnum(str, Enum):
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

class PostNotificationsV3RegistrationsRequestBodyEventTypeEnum(str, Enum):
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
class PostNotificationsV3RegistrationsRequestBody:
    channel_type: PostNotificationsV3RegistrationsRequestBodyChannelTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelType') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    event_source: Optional[PostNotificationsV3RegistrationsRequestBodyEventSourceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventSource') }})
    event_type: Optional[PostNotificationsV3RegistrationsRequestBodyEventTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventType') }})
    initial_state: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initialState') }})
    rule_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleId') }})
    

@dataclasses.dataclass
class PostNotificationsV3RegistrationsSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
class PostNotificationsV3Registrations201ApplicationJSONRegistrationChannelTypeEnum(str, Enum):
    WEBHOOK = "webhook"

class PostNotificationsV3Registrations201ApplicationJSONRegistrationEventSourceEnum(str, Enum):
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

class PostNotificationsV3Registrations201ApplicationJSONRegistrationEventTypeEnum(str, Enum):
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
class PostNotificationsV3Registrations201ApplicationJSONRegistration:
    channel_type: PostNotificationsV3Registrations201ApplicationJSONRegistrationChannelTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelType') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    channel_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelId') }})
    event_source: Optional[PostNotificationsV3Registrations201ApplicationJSONRegistrationEventSourceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventSource') }})
    event_type: Optional[PostNotificationsV3Registrations201ApplicationJSONRegistrationEventTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventType') }})
    initial_state: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initialState') }})
    rule_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleId') }})
    

@dataclass_json
@dataclasses.dataclass
class PostNotificationsV3Registrations201ApplicationJSON:
    registration: Optional[PostNotificationsV3Registrations201ApplicationJSONRegistration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registration') }})
    

@dataclass_json
@dataclasses.dataclass
class PostNotificationsV3Registrations400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostNotificationsV3Registrations401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostNotificationsV3Registrations403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class PostNotificationsV3RegistrationsRequest:
    headers: PostNotificationsV3RegistrationsHeaders = dataclasses.field()
    query_params: PostNotificationsV3RegistrationsQueryParams = dataclasses.field()
    request: PostNotificationsV3RegistrationsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostNotificationsV3RegistrationsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PostNotificationsV3RegistrationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_notifications_v3_registrations_201_application_json_object: Optional[PostNotificationsV3Registrations201ApplicationJSON] = dataclasses.field(default=None)
    post_notifications_v3_registrations_400_application_json_object: Optional[PostNotificationsV3Registrations400ApplicationJSON] = dataclasses.field(default=None)
    post_notifications_v3_registrations_401_application_json_object: Optional[PostNotificationsV3Registrations401ApplicationJSON] = dataclasses.field(default=None)
    post_notifications_v3_registrations_403_application_json_object: Optional[PostNotificationsV3Registrations403ApplicationJSON] = dataclasses.field(default=None)
    
