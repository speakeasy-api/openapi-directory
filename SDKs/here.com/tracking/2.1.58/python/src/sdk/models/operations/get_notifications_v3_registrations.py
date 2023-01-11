import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetNotificationsV3RegistrationsQueryParams:
    count: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    project_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'projectId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetNotificationsV3RegistrationsHeaders:
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNotificationsV3RegistrationsSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
class GetNotificationsV3Registrations200ApplicationJSONDataChannelTypeEnum(str, Enum):
    WEBHOOK = "webhook"

class GetNotificationsV3Registrations200ApplicationJSONDataEventSourceEnum(str, Enum):
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

class GetNotificationsV3Registrations200ApplicationJSONDataEventTypeEnum(str, Enum):
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
class GetNotificationsV3Registrations200ApplicationJSONData:
    channel_type: GetNotificationsV3Registrations200ApplicationJSONDataChannelTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelType') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    channel_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelId') }})
    event_source: Optional[GetNotificationsV3Registrations200ApplicationJSONDataEventSourceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventSource') }})
    event_type: Optional[GetNotificationsV3Registrations200ApplicationJSONDataEventTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventType') }})
    initial_state: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initialState') }})
    rule_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleId') }})
    

@dataclass_json
@dataclasses.dataclass
class GetNotificationsV3Registrations200ApplicationJSON:
    r"""GetNotificationsV3Registrations200ApplicationJSON
    Response body contains an array of notification registration objects, count indicating the number of registrations,
    and pageToken if available. If no registrations are found, an object with empty data array is returned.
    
    """
    
    count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    data: Optional[list[GetNotificationsV3Registrations200ApplicationJSONData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageToken') }})
    

@dataclass_json
@dataclasses.dataclass
class GetNotificationsV3Registrations400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetNotificationsV3Registrations401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetNotificationsV3Registrations403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class GetNotificationsV3RegistrationsRequest:
    headers: GetNotificationsV3RegistrationsHeaders = dataclasses.field()
    query_params: GetNotificationsV3RegistrationsQueryParams = dataclasses.field()
    security: GetNotificationsV3RegistrationsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetNotificationsV3RegistrationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_notifications_v3_registrations_200_application_json_object: Optional[GetNotificationsV3Registrations200ApplicationJSON] = dataclasses.field(default=None)
    get_notifications_v3_registrations_400_application_json_object: Optional[GetNotificationsV3Registrations400ApplicationJSON] = dataclasses.field(default=None)
    get_notifications_v3_registrations_401_application_json_object: Optional[GetNotificationsV3Registrations401ApplicationJSON] = dataclasses.field(default=None)
    get_notifications_v3_registrations_403_application_json_object: Optional[GetNotificationsV3Registrations403ApplicationJSON] = dataclasses.field(default=None)
    
