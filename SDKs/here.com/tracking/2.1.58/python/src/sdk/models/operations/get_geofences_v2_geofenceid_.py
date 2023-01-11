import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetGeofencesV2GeofenceIDPathParams:
    geofence_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'geofenceId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetGeofencesV2GeofenceIDQueryParams:
    fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    

@dataclasses.dataclass
class GetGeofencesV2GeofenceIDHeaders:
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetGeofencesV2GeofenceIDSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class GetGeofencesV2GeofenceID200ApplicationJSONGeofenceCircleDefinitionCenter:
    r"""GetGeofencesV2GeofenceID200ApplicationJSONGeofenceCircleDefinitionCenter
    The coordinates of the center point of the circle.
    """
    
    lat: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    lng: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lng') }})
    

@dataclass_json
@dataclasses.dataclass
class GetGeofencesV2GeofenceID200ApplicationJSONGeofenceCircleDefinitionFloor:
    r"""GetGeofencesV2GeofenceID200ApplicationJSONGeofenceCircleDefinitionFloor
    The building associated with the geofence
    """
    
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    level: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('level') }})
    

@dataclass_json
@dataclasses.dataclass
class GetGeofencesV2GeofenceID200ApplicationJSONGeofenceCircleDefinition:
    r"""GetGeofencesV2GeofenceID200ApplicationJSONGeofenceCircleDefinition
    An object that defines the area of a circular geofence
    """
    
    center: GetGeofencesV2GeofenceID200ApplicationJSONGeofenceCircleDefinitionCenter = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('center') }})
    radius: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('radius') }})
    floor: Optional[GetGeofencesV2GeofenceID200ApplicationJSONGeofenceCircleDefinitionFloor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floor') }})
    
class GetGeofencesV2GeofenceID200ApplicationJSONGeofenceCircleTypeEnum(str, Enum):
    CIRCLE = "circle"


@dataclass_json
@dataclasses.dataclass
class GetGeofencesV2GeofenceID200ApplicationJSONGeofenceCircle:
    definition: GetGeofencesV2GeofenceID200ApplicationJSONGeofenceCircleDefinition = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('definition') }})
    type: GetGeofencesV2GeofenceID200ApplicationJSONGeofenceCircleTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class GetGeofencesV2GeofenceID200ApplicationJSONGeofencePolygonDefinitionFloor:
    r"""GetGeofencesV2GeofenceID200ApplicationJSONGeofencePolygonDefinitionFloor
    The building associated with the geofence
    """
    
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    level: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('level') }})
    

@dataclass_json
@dataclasses.dataclass
class GetGeofencesV2GeofenceID200ApplicationJSONGeofencePolygonDefinitionPoints:
    lat: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    lng: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lng') }})
    

@dataclass_json
@dataclasses.dataclass
class GetGeofencesV2GeofenceID200ApplicationJSONGeofencePolygonDefinition:
    r"""GetGeofencesV2GeofenceID200ApplicationJSONGeofencePolygonDefinition
    An object that defines the area of a polygonal geofence.
    """
    
    points: list[GetGeofencesV2GeofenceID200ApplicationJSONGeofencePolygonDefinitionPoints] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('points') }})
    floor: Optional[GetGeofencesV2GeofenceID200ApplicationJSONGeofencePolygonDefinitionFloor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floor') }})
    
class GetGeofencesV2GeofenceID200ApplicationJSONGeofencePolygonTypeEnum(str, Enum):
    POLYGON = "polygon"


@dataclass_json
@dataclasses.dataclass
class GetGeofencesV2GeofenceID200ApplicationJSONGeofencePolygon:
    definition: GetGeofencesV2GeofenceID200ApplicationJSONGeofencePolygonDefinition = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('definition') }})
    type: GetGeofencesV2GeofenceID200ApplicationJSONGeofencePolygonTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class GetGeofencesV2GeofenceID200ApplicationJSONGeofencePoiDefinitionFloor:
    r"""GetGeofencesV2GeofenceID200ApplicationJSONGeofencePoiDefinitionFloor
    The building associated with the geofence
    """
    
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    level: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('level') }})
    

@dataclass_json
@dataclasses.dataclass
class GetGeofencesV2GeofenceID200ApplicationJSONGeofencePoiDefinitionLocationPosition:
    r"""GetGeofencesV2GeofenceID200ApplicationJSONGeofencePoiDefinitionLocationPosition
    Coordinates for visualization purposes
    """
    
    lat: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    lng: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lng') }})
    

@dataclass_json
@dataclasses.dataclass
class GetGeofencesV2GeofenceID200ApplicationJSONGeofencePoiDefinitionLocation:
    r"""GetGeofencesV2GeofenceID200ApplicationJSONGeofencePoiDefinitionLocation
    Details of the geofence location
    """
    
    address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    position: Optional[GetGeofencesV2GeofenceID200ApplicationJSONGeofencePoiDefinitionLocationPosition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    room: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('room') }})
    

@dataclass_json
@dataclasses.dataclass
class GetGeofencesV2GeofenceID200ApplicationJSONGeofencePoiDefinition:
    r"""GetGeofencesV2GeofenceID200ApplicationJSONGeofencePoiDefinition
    An object that defines the area of a POI geofence.
    """
    
    floor: Optional[GetGeofencesV2GeofenceID200ApplicationJSONGeofencePoiDefinitionFloor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floor') }})
    location: Optional[GetGeofencesV2GeofenceID200ApplicationJSONGeofencePoiDefinitionLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    

@dataclass_json
@dataclasses.dataclass
class GetGeofencesV2GeofenceID200ApplicationJSONGeofencePoiTrainingStatusMetadataCoordinate:
    r"""GetGeofencesV2GeofenceID200ApplicationJSONGeofencePoiTrainingStatusMetadataCoordinate
    Training data position
    """
    
    lat: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    lng: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lng') }})
    

@dataclass_json
@dataclasses.dataclass
class GetGeofencesV2GeofenceID200ApplicationJSONGeofencePoiTrainingStatusMetadata:
    used_wlan_ap_count: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('usedWlanApCount') }})
    coordinate: Optional[GetGeofencesV2GeofenceID200ApplicationJSONGeofencePoiTrainingStatusMetadataCoordinate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coordinate') }})
    timestamp: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    tracking_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingId') }})
    

@dataclass_json
@dataclasses.dataclass
class GetGeofencesV2GeofenceID200ApplicationJSONGeofencePoiTrainingStatus:
    trained: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('trained') }})
    metadata: Optional[GetGeofencesV2GeofenceID200ApplicationJSONGeofencePoiTrainingStatusMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    
class GetGeofencesV2GeofenceID200ApplicationJSONGeofencePoiTypeEnum(str, Enum):
    POI = "poi"


@dataclass_json
@dataclasses.dataclass
class GetGeofencesV2GeofenceID200ApplicationJSONGeofencePoi:
    training_status: GetGeofencesV2GeofenceID200ApplicationJSONGeofencePoiTrainingStatus = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('trainingStatus') }})
    type: GetGeofencesV2GeofenceID200ApplicationJSONGeofencePoiTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    definition: Optional[GetGeofencesV2GeofenceID200ApplicationJSONGeofencePoiDefinition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('definition') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class GetGeofencesV2GeofenceID200ApplicationJSON:
    r"""GetGeofencesV2GeofenceID200ApplicationJSON
    Response body contains a single geofence object
    """
    
    geofence: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('geofence') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class GetGeofencesV2GeofenceID400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetGeofencesV2GeofenceID401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetGeofencesV2GeofenceID403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetGeofencesV2GeofenceID404ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class GetGeofencesV2GeofenceIDRequest:
    headers: GetGeofencesV2GeofenceIDHeaders = dataclasses.field()
    path_params: GetGeofencesV2GeofenceIDPathParams = dataclasses.field()
    query_params: GetGeofencesV2GeofenceIDQueryParams = dataclasses.field()
    security: GetGeofencesV2GeofenceIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetGeofencesV2GeofenceIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    get_geofences_v2_geofence_id_200_application_json_object: Optional[GetGeofencesV2GeofenceID200ApplicationJSON] = dataclasses.field(default=None)
    get_geofences_v2_geofence_id_400_application_json_object: Optional[GetGeofencesV2GeofenceID400ApplicationJSON] = dataclasses.field(default=None)
    get_geofences_v2_geofence_id_401_application_json_object: Optional[GetGeofencesV2GeofenceID401ApplicationJSON] = dataclasses.field(default=None)
    get_geofences_v2_geofence_id_403_application_json_object: Optional[GetGeofencesV2GeofenceID403ApplicationJSON] = dataclasses.field(default=None)
    get_geofences_v2_geofence_id_404_application_json_object: Optional[GetGeofencesV2GeofenceID404ApplicationJSON] = dataclasses.field(default=None)
    
