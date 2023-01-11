import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetDeviceAssociationsV2TrackingIDGeofencesPathParams:
    tracking_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'trackingId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDeviceAssociationsV2TrackingIDGeofencesQueryParams:
    app_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'appId', 'style': 'form', 'explode': True }})
    count: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDeviceAssociationsV2TrackingIDGeofencesHeaders:
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDeviceAssociationsV2TrackingIDGeofencesSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class GetDeviceAssociationsV2TrackingIDGeofences200ApplicationJSONDataGeofenceCircleDefinitionCenter:
    r"""GetDeviceAssociationsV2TrackingIDGeofences200ApplicationJSONDataGeofenceCircleDefinitionCenter
    The coordinates of the center point of the circle.
    """
    
    lat: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    lng: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lng') }})
    

@dataclass_json
@dataclasses.dataclass
class GetDeviceAssociationsV2TrackingIDGeofences200ApplicationJSONDataGeofenceCircleDefinitionFloor:
    r"""GetDeviceAssociationsV2TrackingIDGeofences200ApplicationJSONDataGeofenceCircleDefinitionFloor
    The building associated with the geofence
    """
    
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    level: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('level') }})
    

@dataclass_json
@dataclasses.dataclass
class GetDeviceAssociationsV2TrackingIDGeofences200ApplicationJSONDataGeofenceCircleDefinition:
    r"""GetDeviceAssociationsV2TrackingIDGeofences200ApplicationJSONDataGeofenceCircleDefinition
    An object that defines the area of a circular geofence
    """
    
    center: GetDeviceAssociationsV2TrackingIDGeofences200ApplicationJSONDataGeofenceCircleDefinitionCenter = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('center') }})
    radius: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('radius') }})
    floor: Optional[GetDeviceAssociationsV2TrackingIDGeofences200ApplicationJSONDataGeofenceCircleDefinitionFloor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floor') }})
    
class GetDeviceAssociationsV2TrackingIDGeofences200ApplicationJSONDataGeofenceCircleTypeEnum(str, Enum):
    CIRCLE = "circle"


@dataclass_json
@dataclasses.dataclass
class GetDeviceAssociationsV2TrackingIDGeofences200ApplicationJSONDataGeofenceCircle:
    definition: GetDeviceAssociationsV2TrackingIDGeofences200ApplicationJSONDataGeofenceCircleDefinition = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('definition') }})
    type: GetDeviceAssociationsV2TrackingIDGeofences200ApplicationJSONDataGeofenceCircleTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class GetDeviceAssociationsV2TrackingIDGeofences200ApplicationJSONDataGeofencePolygonDefinitionFloor:
    r"""GetDeviceAssociationsV2TrackingIDGeofences200ApplicationJSONDataGeofencePolygonDefinitionFloor
    The building associated with the geofence
    """
    
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    level: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('level') }})
    

@dataclass_json
@dataclasses.dataclass
class GetDeviceAssociationsV2TrackingIDGeofences200ApplicationJSONDataGeofencePolygonDefinitionPoints:
    lat: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    lng: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lng') }})
    

@dataclass_json
@dataclasses.dataclass
class GetDeviceAssociationsV2TrackingIDGeofences200ApplicationJSONDataGeofencePolygonDefinition:
    r"""GetDeviceAssociationsV2TrackingIDGeofences200ApplicationJSONDataGeofencePolygonDefinition
    An object that defines the area of a polygonal geofence.
    """
    
    points: list[GetDeviceAssociationsV2TrackingIDGeofences200ApplicationJSONDataGeofencePolygonDefinitionPoints] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('points') }})
    floor: Optional[GetDeviceAssociationsV2TrackingIDGeofences200ApplicationJSONDataGeofencePolygonDefinitionFloor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floor') }})
    
class GetDeviceAssociationsV2TrackingIDGeofences200ApplicationJSONDataGeofencePolygonTypeEnum(str, Enum):
    POLYGON = "polygon"


@dataclass_json
@dataclasses.dataclass
class GetDeviceAssociationsV2TrackingIDGeofences200ApplicationJSONDataGeofencePolygon:
    definition: GetDeviceAssociationsV2TrackingIDGeofences200ApplicationJSONDataGeofencePolygonDefinition = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('definition') }})
    type: GetDeviceAssociationsV2TrackingIDGeofences200ApplicationJSONDataGeofencePolygonTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class GetDeviceAssociationsV2TrackingIDGeofences200ApplicationJSONDataGeofencePoiDefinitionFloor:
    r"""GetDeviceAssociationsV2TrackingIDGeofences200ApplicationJSONDataGeofencePoiDefinitionFloor
    The building associated with the geofence
    """
    
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    level: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('level') }})
    

@dataclass_json
@dataclasses.dataclass
class GetDeviceAssociationsV2TrackingIDGeofences200ApplicationJSONDataGeofencePoiDefinitionLocationPosition:
    r"""GetDeviceAssociationsV2TrackingIDGeofences200ApplicationJSONDataGeofencePoiDefinitionLocationPosition
    Coordinates for visualization purposes
    """
    
    lat: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    lng: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lng') }})
    

@dataclass_json
@dataclasses.dataclass
class GetDeviceAssociationsV2TrackingIDGeofences200ApplicationJSONDataGeofencePoiDefinitionLocation:
    r"""GetDeviceAssociationsV2TrackingIDGeofences200ApplicationJSONDataGeofencePoiDefinitionLocation
    Details of the geofence location
    """
    
    address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    position: Optional[GetDeviceAssociationsV2TrackingIDGeofences200ApplicationJSONDataGeofencePoiDefinitionLocationPosition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    room: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('room') }})
    

@dataclass_json
@dataclasses.dataclass
class GetDeviceAssociationsV2TrackingIDGeofences200ApplicationJSONDataGeofencePoiDefinition:
    r"""GetDeviceAssociationsV2TrackingIDGeofences200ApplicationJSONDataGeofencePoiDefinition
    An object that defines the area of a POI geofence.
    """
    
    floor: Optional[GetDeviceAssociationsV2TrackingIDGeofences200ApplicationJSONDataGeofencePoiDefinitionFloor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floor') }})
    location: Optional[GetDeviceAssociationsV2TrackingIDGeofences200ApplicationJSONDataGeofencePoiDefinitionLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    

@dataclass_json
@dataclasses.dataclass
class GetDeviceAssociationsV2TrackingIDGeofences200ApplicationJSONDataGeofencePoiTrainingStatusMetadataCoordinate:
    r"""GetDeviceAssociationsV2TrackingIDGeofences200ApplicationJSONDataGeofencePoiTrainingStatusMetadataCoordinate
    Training data position
    """
    
    lat: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    lng: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lng') }})
    

@dataclass_json
@dataclasses.dataclass
class GetDeviceAssociationsV2TrackingIDGeofences200ApplicationJSONDataGeofencePoiTrainingStatusMetadata:
    used_wlan_ap_count: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('usedWlanApCount') }})
    coordinate: Optional[GetDeviceAssociationsV2TrackingIDGeofences200ApplicationJSONDataGeofencePoiTrainingStatusMetadataCoordinate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coordinate') }})
    timestamp: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    tracking_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingId') }})
    

@dataclass_json
@dataclasses.dataclass
class GetDeviceAssociationsV2TrackingIDGeofences200ApplicationJSONDataGeofencePoiTrainingStatus:
    trained: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('trained') }})
    metadata: Optional[GetDeviceAssociationsV2TrackingIDGeofences200ApplicationJSONDataGeofencePoiTrainingStatusMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    
class GetDeviceAssociationsV2TrackingIDGeofences200ApplicationJSONDataGeofencePoiTypeEnum(str, Enum):
    POI = "poi"


@dataclass_json
@dataclasses.dataclass
class GetDeviceAssociationsV2TrackingIDGeofences200ApplicationJSONDataGeofencePoi:
    training_status: GetDeviceAssociationsV2TrackingIDGeofences200ApplicationJSONDataGeofencePoiTrainingStatus = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('trainingStatus') }})
    type: GetDeviceAssociationsV2TrackingIDGeofences200ApplicationJSONDataGeofencePoiTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    definition: Optional[GetDeviceAssociationsV2TrackingIDGeofences200ApplicationJSONDataGeofencePoiDefinition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('definition') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class GetDeviceAssociationsV2TrackingIDGeofences200ApplicationJSONData:
    geofence: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('geofence') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class GetDeviceAssociationsV2TrackingIDGeofences200ApplicationJSON:
    r"""GetDeviceAssociationsV2TrackingIDGeofences200ApplicationJSON
    Response body contains an array of geofence objects, count indicating the number of returned geofences, and pageToken if available. If no fences are found, an object with empty data array is returned
    """
    
    count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    data: Optional[list[GetDeviceAssociationsV2TrackingIDGeofences200ApplicationJSONData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageToken') }})
    

@dataclass_json
@dataclasses.dataclass
class GetDeviceAssociationsV2TrackingIDGeofences400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetDeviceAssociationsV2TrackingIDGeofences401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetDeviceAssociationsV2TrackingIDGeofences403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetDeviceAssociationsV2TrackingIDGeofences404ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class GetDeviceAssociationsV2TrackingIDGeofencesRequest:
    headers: GetDeviceAssociationsV2TrackingIDGeofencesHeaders = dataclasses.field()
    path_params: GetDeviceAssociationsV2TrackingIDGeofencesPathParams = dataclasses.field()
    query_params: GetDeviceAssociationsV2TrackingIDGeofencesQueryParams = dataclasses.field()
    security: GetDeviceAssociationsV2TrackingIDGeofencesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetDeviceAssociationsV2TrackingIDGeofencesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    get_device_associations_v2_tracking_id_geofences_200_application_json_object: Optional[GetDeviceAssociationsV2TrackingIDGeofences200ApplicationJSON] = dataclasses.field(default=None)
    get_device_associations_v2_tracking_id_geofences_400_application_json_object: Optional[GetDeviceAssociationsV2TrackingIDGeofences400ApplicationJSON] = dataclasses.field(default=None)
    get_device_associations_v2_tracking_id_geofences_401_application_json_object: Optional[GetDeviceAssociationsV2TrackingIDGeofences401ApplicationJSON] = dataclasses.field(default=None)
    get_device_associations_v2_tracking_id_geofences_403_application_json_object: Optional[GetDeviceAssociationsV2TrackingIDGeofences403ApplicationJSON] = dataclasses.field(default=None)
    get_device_associations_v2_tracking_id_geofences_404_application_json_object: Optional[GetDeviceAssociationsV2TrackingIDGeofences404ApplicationJSON] = dataclasses.field(default=None)
    
