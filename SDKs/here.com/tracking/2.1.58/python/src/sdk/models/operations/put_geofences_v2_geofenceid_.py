import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class PutGeofencesV2GeofenceIDPathParams:
    geofence_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'geofenceId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutGeofencesV2GeofenceIDHeaders:
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PutGeofencesV2GeofenceIDRequestBodyCircleDefinitionCenter:
    r"""PutGeofencesV2GeofenceIDRequestBodyCircleDefinitionCenter
    The coordinates of the center point of the circle.
    """
    
    lat: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    lng: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lng') }})
    

@dataclass_json
@dataclasses.dataclass
class PutGeofencesV2GeofenceIDRequestBodyCircleDefinitionFloor:
    r"""PutGeofencesV2GeofenceIDRequestBodyCircleDefinitionFloor
    The building associated with the geofence
    """
    
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    level: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('level') }})
    

@dataclass_json
@dataclasses.dataclass
class PutGeofencesV2GeofenceIDRequestBodyCircleDefinition:
    r"""PutGeofencesV2GeofenceIDRequestBodyCircleDefinition
    An object that defines the area of a circular geofence
    """
    
    center: PutGeofencesV2GeofenceIDRequestBodyCircleDefinitionCenter = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('center') }})
    radius: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('radius') }})
    floor: Optional[PutGeofencesV2GeofenceIDRequestBodyCircleDefinitionFloor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floor') }})
    
class PutGeofencesV2GeofenceIDRequestBodyCircleTypeEnum(str, Enum):
    CIRCLE = "circle"


@dataclass_json
@dataclasses.dataclass
class PutGeofencesV2GeofenceIDRequestBodyCircle:
    definition: PutGeofencesV2GeofenceIDRequestBodyCircleDefinition = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('definition') }})
    type: PutGeofencesV2GeofenceIDRequestBodyCircleTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class PutGeofencesV2GeofenceIDRequestBodyPolygonDefinitionFloor:
    r"""PutGeofencesV2GeofenceIDRequestBodyPolygonDefinitionFloor
    The building associated with the geofence
    """
    
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    level: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('level') }})
    

@dataclass_json
@dataclasses.dataclass
class PutGeofencesV2GeofenceIDRequestBodyPolygonDefinitionPoints:
    lat: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    lng: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lng') }})
    

@dataclass_json
@dataclasses.dataclass
class PutGeofencesV2GeofenceIDRequestBodyPolygonDefinition:
    r"""PutGeofencesV2GeofenceIDRequestBodyPolygonDefinition
    An object that defines the area of a polygonal geofence.
    """
    
    points: list[PutGeofencesV2GeofenceIDRequestBodyPolygonDefinitionPoints] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('points') }})
    floor: Optional[PutGeofencesV2GeofenceIDRequestBodyPolygonDefinitionFloor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floor') }})
    
class PutGeofencesV2GeofenceIDRequestBodyPolygonTypeEnum(str, Enum):
    POLYGON = "polygon"


@dataclass_json
@dataclasses.dataclass
class PutGeofencesV2GeofenceIDRequestBodyPolygon:
    definition: PutGeofencesV2GeofenceIDRequestBodyPolygonDefinition = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('definition') }})
    type: PutGeofencesV2GeofenceIDRequestBodyPolygonTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class PutGeofencesV2GeofenceIDRequestBodyPoiDefinitionFloor:
    r"""PutGeofencesV2GeofenceIDRequestBodyPoiDefinitionFloor
    The building associated with the geofence
    """
    
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    level: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('level') }})
    

@dataclass_json
@dataclasses.dataclass
class PutGeofencesV2GeofenceIDRequestBodyPoiDefinitionLocationPosition:
    r"""PutGeofencesV2GeofenceIDRequestBodyPoiDefinitionLocationPosition
    Coordinates for visualization purposes
    """
    
    lat: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    lng: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lng') }})
    

@dataclass_json
@dataclasses.dataclass
class PutGeofencesV2GeofenceIDRequestBodyPoiDefinitionLocation:
    r"""PutGeofencesV2GeofenceIDRequestBodyPoiDefinitionLocation
    Details of the geofence location
    """
    
    address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    position: Optional[PutGeofencesV2GeofenceIDRequestBodyPoiDefinitionLocationPosition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    room: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('room') }})
    

@dataclass_json
@dataclasses.dataclass
class PutGeofencesV2GeofenceIDRequestBodyPoiDefinition:
    r"""PutGeofencesV2GeofenceIDRequestBodyPoiDefinition
    An object that defines the area of a POI geofence.
    """
    
    floor: Optional[PutGeofencesV2GeofenceIDRequestBodyPoiDefinitionFloor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floor') }})
    location: Optional[PutGeofencesV2GeofenceIDRequestBodyPoiDefinitionLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    
class PutGeofencesV2GeofenceIDRequestBodyPoiTypeEnum(str, Enum):
    POI = "poi"


@dataclass_json
@dataclasses.dataclass
class PutGeofencesV2GeofenceIDRequestBodyPoi:
    type: PutGeofencesV2GeofenceIDRequestBodyPoiTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    definition: Optional[PutGeofencesV2GeofenceIDRequestBodyPoiDefinition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('definition') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclasses.dataclass
class PutGeofencesV2GeofenceIDSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class PutGeofencesV2GeofenceID200ApplicationJSONGeofenceCircleDefinitionCenter:
    r"""PutGeofencesV2GeofenceID200ApplicationJSONGeofenceCircleDefinitionCenter
    The coordinates of the center point of the circle.
    """
    
    lat: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    lng: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lng') }})
    

@dataclass_json
@dataclasses.dataclass
class PutGeofencesV2GeofenceID200ApplicationJSONGeofenceCircleDefinitionFloor:
    r"""PutGeofencesV2GeofenceID200ApplicationJSONGeofenceCircleDefinitionFloor
    The building associated with the geofence
    """
    
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    level: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('level') }})
    

@dataclass_json
@dataclasses.dataclass
class PutGeofencesV2GeofenceID200ApplicationJSONGeofenceCircleDefinition:
    r"""PutGeofencesV2GeofenceID200ApplicationJSONGeofenceCircleDefinition
    An object that defines the area of a circular geofence
    """
    
    center: PutGeofencesV2GeofenceID200ApplicationJSONGeofenceCircleDefinitionCenter = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('center') }})
    radius: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('radius') }})
    floor: Optional[PutGeofencesV2GeofenceID200ApplicationJSONGeofenceCircleDefinitionFloor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floor') }})
    
class PutGeofencesV2GeofenceID200ApplicationJSONGeofenceCircleTypeEnum(str, Enum):
    CIRCLE = "circle"


@dataclass_json
@dataclasses.dataclass
class PutGeofencesV2GeofenceID200ApplicationJSONGeofenceCircle:
    definition: PutGeofencesV2GeofenceID200ApplicationJSONGeofenceCircleDefinition = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('definition') }})
    type: PutGeofencesV2GeofenceID200ApplicationJSONGeofenceCircleTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class PutGeofencesV2GeofenceID200ApplicationJSONGeofencePolygonDefinitionFloor:
    r"""PutGeofencesV2GeofenceID200ApplicationJSONGeofencePolygonDefinitionFloor
    The building associated with the geofence
    """
    
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    level: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('level') }})
    

@dataclass_json
@dataclasses.dataclass
class PutGeofencesV2GeofenceID200ApplicationJSONGeofencePolygonDefinitionPoints:
    lat: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    lng: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lng') }})
    

@dataclass_json
@dataclasses.dataclass
class PutGeofencesV2GeofenceID200ApplicationJSONGeofencePolygonDefinition:
    r"""PutGeofencesV2GeofenceID200ApplicationJSONGeofencePolygonDefinition
    An object that defines the area of a polygonal geofence.
    """
    
    points: list[PutGeofencesV2GeofenceID200ApplicationJSONGeofencePolygonDefinitionPoints] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('points') }})
    floor: Optional[PutGeofencesV2GeofenceID200ApplicationJSONGeofencePolygonDefinitionFloor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floor') }})
    
class PutGeofencesV2GeofenceID200ApplicationJSONGeofencePolygonTypeEnum(str, Enum):
    POLYGON = "polygon"


@dataclass_json
@dataclasses.dataclass
class PutGeofencesV2GeofenceID200ApplicationJSONGeofencePolygon:
    definition: PutGeofencesV2GeofenceID200ApplicationJSONGeofencePolygonDefinition = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('definition') }})
    type: PutGeofencesV2GeofenceID200ApplicationJSONGeofencePolygonTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class PutGeofencesV2GeofenceID200ApplicationJSONGeofencePoiDefinitionFloor:
    r"""PutGeofencesV2GeofenceID200ApplicationJSONGeofencePoiDefinitionFloor
    The building associated with the geofence
    """
    
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    level: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('level') }})
    

@dataclass_json
@dataclasses.dataclass
class PutGeofencesV2GeofenceID200ApplicationJSONGeofencePoiDefinitionLocationPosition:
    r"""PutGeofencesV2GeofenceID200ApplicationJSONGeofencePoiDefinitionLocationPosition
    Coordinates for visualization purposes
    """
    
    lat: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    lng: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lng') }})
    

@dataclass_json
@dataclasses.dataclass
class PutGeofencesV2GeofenceID200ApplicationJSONGeofencePoiDefinitionLocation:
    r"""PutGeofencesV2GeofenceID200ApplicationJSONGeofencePoiDefinitionLocation
    Details of the geofence location
    """
    
    address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    position: Optional[PutGeofencesV2GeofenceID200ApplicationJSONGeofencePoiDefinitionLocationPosition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    room: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('room') }})
    

@dataclass_json
@dataclasses.dataclass
class PutGeofencesV2GeofenceID200ApplicationJSONGeofencePoiDefinition:
    r"""PutGeofencesV2GeofenceID200ApplicationJSONGeofencePoiDefinition
    An object that defines the area of a POI geofence.
    """
    
    floor: Optional[PutGeofencesV2GeofenceID200ApplicationJSONGeofencePoiDefinitionFloor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floor') }})
    location: Optional[PutGeofencesV2GeofenceID200ApplicationJSONGeofencePoiDefinitionLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    
class PutGeofencesV2GeofenceID200ApplicationJSONGeofencePoiTypeEnum(str, Enum):
    POI = "poi"


@dataclass_json
@dataclasses.dataclass
class PutGeofencesV2GeofenceID200ApplicationJSONGeofencePoi:
    type: PutGeofencesV2GeofenceID200ApplicationJSONGeofencePoiTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    definition: Optional[PutGeofencesV2GeofenceID200ApplicationJSONGeofencePoiDefinition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('definition') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class PutGeofencesV2GeofenceID200ApplicationJSON:
    r"""PutGeofencesV2GeofenceID200ApplicationJSON
    Response body contains a single geofence object
    """
    
    geofence: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('geofence') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class PutGeofencesV2GeofenceID400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PutGeofencesV2GeofenceID401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PutGeofencesV2GeofenceID403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PutGeofencesV2GeofenceID404ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class PutGeofencesV2GeofenceIDRequest:
    headers: PutGeofencesV2GeofenceIDHeaders = dataclasses.field()
    path_params: PutGeofencesV2GeofenceIDPathParams = dataclasses.field()
    security: PutGeofencesV2GeofenceIDSecurity = dataclasses.field()
    request: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutGeofencesV2GeofenceIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    put_geofences_v2_geofence_id_200_application_json_object: Optional[PutGeofencesV2GeofenceID200ApplicationJSON] = dataclasses.field(default=None)
    put_geofences_v2_geofence_id_400_application_json_object: Optional[PutGeofencesV2GeofenceID400ApplicationJSON] = dataclasses.field(default=None)
    put_geofences_v2_geofence_id_401_application_json_object: Optional[PutGeofencesV2GeofenceID401ApplicationJSON] = dataclasses.field(default=None)
    put_geofences_v2_geofence_id_403_application_json_object: Optional[PutGeofencesV2GeofenceID403ApplicationJSON] = dataclasses.field(default=None)
    put_geofences_v2_geofence_id_404_application_json_object: Optional[PutGeofencesV2GeofenceID404ApplicationJSON] = dataclasses.field(default=None)
    
