import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetTransitionsV2DevicesTrackingIDPathParams:
    tracking_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'trackingId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTransitionsV2DevicesTrackingIDQueryParams:
    after: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'after', 'style': 'form', 'explode': True }})
    app_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'appId', 'style': 'form', 'explode': True }})
    before: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'before', 'style': 'form', 'explode': True }})
    count: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTransitionsV2DevicesTrackingIDHeaders:
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTransitionsV2DevicesTrackingIDSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class GetTransitionsV2DevicesTrackingID200ApplicationJSONDataGeofenceCircleDefinitionCenter:
    r"""GetTransitionsV2DevicesTrackingID200ApplicationJSONDataGeofenceCircleDefinitionCenter
    The coordinates of the center point of the circle.
    """
    
    lat: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    lng: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lng') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTransitionsV2DevicesTrackingID200ApplicationJSONDataGeofenceCircleDefinitionFloor:
    r"""GetTransitionsV2DevicesTrackingID200ApplicationJSONDataGeofenceCircleDefinitionFloor
    The building associated with the geofence
    """
    
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    level: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('level') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTransitionsV2DevicesTrackingID200ApplicationJSONDataGeofenceCircleDefinition:
    r"""GetTransitionsV2DevicesTrackingID200ApplicationJSONDataGeofenceCircleDefinition
    An object that defines the area of a circular geofence
    """
    
    center: GetTransitionsV2DevicesTrackingID200ApplicationJSONDataGeofenceCircleDefinitionCenter = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('center') }})
    radius: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('radius') }})
    floor: Optional[GetTransitionsV2DevicesTrackingID200ApplicationJSONDataGeofenceCircleDefinitionFloor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floor') }})
    
class GetTransitionsV2DevicesTrackingID200ApplicationJSONDataGeofenceCircleTypeEnum(str, Enum):
    CIRCLE = "circle"


@dataclass_json
@dataclasses.dataclass
class GetTransitionsV2DevicesTrackingID200ApplicationJSONDataGeofenceCircle:
    definition: GetTransitionsV2DevicesTrackingID200ApplicationJSONDataGeofenceCircleDefinition = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('definition') }})
    type: GetTransitionsV2DevicesTrackingID200ApplicationJSONDataGeofenceCircleTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTransitionsV2DevicesTrackingID200ApplicationJSONDataGeofencePolygonDefinitionFloor:
    r"""GetTransitionsV2DevicesTrackingID200ApplicationJSONDataGeofencePolygonDefinitionFloor
    The building associated with the geofence
    """
    
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    level: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('level') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTransitionsV2DevicesTrackingID200ApplicationJSONDataGeofencePolygonDefinitionPoints:
    lat: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    lng: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lng') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTransitionsV2DevicesTrackingID200ApplicationJSONDataGeofencePolygonDefinition:
    r"""GetTransitionsV2DevicesTrackingID200ApplicationJSONDataGeofencePolygonDefinition
    An object that defines the area of a polygonal geofence.
    """
    
    points: list[GetTransitionsV2DevicesTrackingID200ApplicationJSONDataGeofencePolygonDefinitionPoints] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('points') }})
    floor: Optional[GetTransitionsV2DevicesTrackingID200ApplicationJSONDataGeofencePolygonDefinitionFloor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floor') }})
    
class GetTransitionsV2DevicesTrackingID200ApplicationJSONDataGeofencePolygonTypeEnum(str, Enum):
    POLYGON = "polygon"


@dataclass_json
@dataclasses.dataclass
class GetTransitionsV2DevicesTrackingID200ApplicationJSONDataGeofencePolygon:
    definition: GetTransitionsV2DevicesTrackingID200ApplicationJSONDataGeofencePolygonDefinition = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('definition') }})
    type: GetTransitionsV2DevicesTrackingID200ApplicationJSONDataGeofencePolygonTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTransitionsV2DevicesTrackingID200ApplicationJSONDataGeofencePoiDefinitionFloor:
    r"""GetTransitionsV2DevicesTrackingID200ApplicationJSONDataGeofencePoiDefinitionFloor
    The building associated with the geofence
    """
    
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    level: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('level') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTransitionsV2DevicesTrackingID200ApplicationJSONDataGeofencePoiDefinitionLocationPosition:
    r"""GetTransitionsV2DevicesTrackingID200ApplicationJSONDataGeofencePoiDefinitionLocationPosition
    Coordinates for visualization purposes
    """
    
    lat: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    lng: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lng') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTransitionsV2DevicesTrackingID200ApplicationJSONDataGeofencePoiDefinitionLocation:
    r"""GetTransitionsV2DevicesTrackingID200ApplicationJSONDataGeofencePoiDefinitionLocation
    Details of the geofence location
    """
    
    address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    position: Optional[GetTransitionsV2DevicesTrackingID200ApplicationJSONDataGeofencePoiDefinitionLocationPosition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    room: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('room') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTransitionsV2DevicesTrackingID200ApplicationJSONDataGeofencePoiDefinition:
    r"""GetTransitionsV2DevicesTrackingID200ApplicationJSONDataGeofencePoiDefinition
    An object that defines the area of a POI geofence.
    """
    
    floor: Optional[GetTransitionsV2DevicesTrackingID200ApplicationJSONDataGeofencePoiDefinitionFloor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floor') }})
    location: Optional[GetTransitionsV2DevicesTrackingID200ApplicationJSONDataGeofencePoiDefinitionLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    
class GetTransitionsV2DevicesTrackingID200ApplicationJSONDataGeofencePoiTypeEnum(str, Enum):
    POI = "poi"


@dataclass_json
@dataclasses.dataclass
class GetTransitionsV2DevicesTrackingID200ApplicationJSONDataGeofencePoi:
    type: GetTransitionsV2DevicesTrackingID200ApplicationJSONDataGeofencePoiTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    definition: Optional[GetTransitionsV2DevicesTrackingID200ApplicationJSONDataGeofencePoiDefinition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('definition') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
class GetTransitionsV2DevicesTrackingID200ApplicationJSONDataInOutEnum(str, Enum):
    PING_OUTSIDE_FENCE = "PING_OUTSIDE_FENCE"
    PING_IN_FENCE = "PING_IN_FENCE"

class GetTransitionsV2DevicesTrackingID200ApplicationJSONDataNotificationStatusEnum(str, Enum):
    SENT = "SENT"
    NOT_SENT = "NOT_SENT"


@dataclass_json
@dataclasses.dataclass
class GetTransitionsV2DevicesTrackingID200ApplicationJSONData:
    r"""GetTransitionsV2DevicesTrackingID200ApplicationJSONData
    | Transition Type          | Meaning                                  |
    | ------------------------ | ---------------------------------------- |
    | PING_OUTSIDE_FENCE       | The device has transitioned outside the geofence. |
    | PING_IN_FENCE            | The device has transitioned inside the geofence. |
    
    """
    
    geofence_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('geofenceId') }})
    in_out: GetTransitionsV2DevicesTrackingID200ApplicationJSONDataInOutEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('inOut') }})
    notification_status: GetTransitionsV2DevicesTrackingID200ApplicationJSONDataNotificationStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationStatus') }})
    timestamp: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    tracking_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingId') }})
    geofence: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geofence') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTransitionsV2DevicesTrackingID200ApplicationJSON:
    r"""GetTransitionsV2DevicesTrackingID200ApplicationJSON
    The response body contains an array of transitions, a count and a
    pageToken if available.
    
    If no transitions are found, an object with an empty data array is provided.
    
    Transitions are listed in descending order based on the timestamp.
    
    If notifications were enabled for the given `trackingId` and `geofenceId` pair at
    the time the transition happened, a notification was sent and the `notificationStatus`
    recorded in the transition history was 'SENT'.
    
    """
    
    count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    data: Optional[list[GetTransitionsV2DevicesTrackingID200ApplicationJSONData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageToken') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTransitionsV2DevicesTrackingID400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTransitionsV2DevicesTrackingID401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTransitionsV2DevicesTrackingID403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTransitionsV2DevicesTrackingID404ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class GetTransitionsV2DevicesTrackingIDRequest:
    headers: GetTransitionsV2DevicesTrackingIDHeaders = dataclasses.field()
    path_params: GetTransitionsV2DevicesTrackingIDPathParams = dataclasses.field()
    query_params: GetTransitionsV2DevicesTrackingIDQueryParams = dataclasses.field()
    security: GetTransitionsV2DevicesTrackingIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTransitionsV2DevicesTrackingIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_transitions_v2_devices_tracking_id_200_application_json_object: Optional[GetTransitionsV2DevicesTrackingID200ApplicationJSON] = dataclasses.field(default=None)
    get_transitions_v2_devices_tracking_id_400_application_json_object: Optional[GetTransitionsV2DevicesTrackingID400ApplicationJSON] = dataclasses.field(default=None)
    get_transitions_v2_devices_tracking_id_401_application_json_object: Optional[GetTransitionsV2DevicesTrackingID401ApplicationJSON] = dataclasses.field(default=None)
    get_transitions_v2_devices_tracking_id_403_application_json_object: Optional[GetTransitionsV2DevicesTrackingID403ApplicationJSON] = dataclasses.field(default=None)
    get_transitions_v2_devices_tracking_id_404_application_json_object: Optional[GetTransitionsV2DevicesTrackingID404ApplicationJSON] = dataclasses.field(default=None)
    
