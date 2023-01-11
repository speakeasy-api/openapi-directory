import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class PostGeofencesV2QueryParams:
    project_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'projectId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostGeofencesV2Headers:
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PostGeofencesV2RequestBodyCircleDefinitionCenter:
    r"""PostGeofencesV2RequestBodyCircleDefinitionCenter
    The coordinates of the center point of the circle.
    """
    
    lat: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    lng: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lng') }})
    

@dataclass_json
@dataclasses.dataclass
class PostGeofencesV2RequestBodyCircleDefinitionFloor:
    r"""PostGeofencesV2RequestBodyCircleDefinitionFloor
    The building associated with the geofence
    """
    
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    level: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('level') }})
    

@dataclass_json
@dataclasses.dataclass
class PostGeofencesV2RequestBodyCircleDefinition:
    r"""PostGeofencesV2RequestBodyCircleDefinition
    An object that defines the area of a circular geofence
    """
    
    center: PostGeofencesV2RequestBodyCircleDefinitionCenter = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('center') }})
    radius: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('radius') }})
    floor: Optional[PostGeofencesV2RequestBodyCircleDefinitionFloor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floor') }})
    
class PostGeofencesV2RequestBodyCircleTypeEnum(str, Enum):
    CIRCLE = "circle"


@dataclass_json
@dataclasses.dataclass
class PostGeofencesV2RequestBodyCircle:
    definition: PostGeofencesV2RequestBodyCircleDefinition = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('definition') }})
    type: PostGeofencesV2RequestBodyCircleTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class PostGeofencesV2RequestBodyPolygonDefinitionFloor:
    r"""PostGeofencesV2RequestBodyPolygonDefinitionFloor
    The building associated with the geofence
    """
    
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    level: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('level') }})
    

@dataclass_json
@dataclasses.dataclass
class PostGeofencesV2RequestBodyPolygonDefinitionPoints:
    lat: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    lng: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lng') }})
    

@dataclass_json
@dataclasses.dataclass
class PostGeofencesV2RequestBodyPolygonDefinition:
    r"""PostGeofencesV2RequestBodyPolygonDefinition
    An object that defines the area of a polygonal geofence.
    """
    
    points: list[PostGeofencesV2RequestBodyPolygonDefinitionPoints] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('points') }})
    floor: Optional[PostGeofencesV2RequestBodyPolygonDefinitionFloor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floor') }})
    
class PostGeofencesV2RequestBodyPolygonTypeEnum(str, Enum):
    POLYGON = "polygon"


@dataclass_json
@dataclasses.dataclass
class PostGeofencesV2RequestBodyPolygon:
    definition: PostGeofencesV2RequestBodyPolygonDefinition = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('definition') }})
    type: PostGeofencesV2RequestBodyPolygonTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class PostGeofencesV2RequestBodyPoiDefinitionFloor:
    r"""PostGeofencesV2RequestBodyPoiDefinitionFloor
    The building associated with the geofence
    """
    
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    level: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('level') }})
    

@dataclass_json
@dataclasses.dataclass
class PostGeofencesV2RequestBodyPoiDefinitionLocationPosition:
    r"""PostGeofencesV2RequestBodyPoiDefinitionLocationPosition
    Coordinates for visualization purposes
    """
    
    lat: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    lng: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lng') }})
    

@dataclass_json
@dataclasses.dataclass
class PostGeofencesV2RequestBodyPoiDefinitionLocation:
    r"""PostGeofencesV2RequestBodyPoiDefinitionLocation
    Details of the geofence location
    """
    
    address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    position: Optional[PostGeofencesV2RequestBodyPoiDefinitionLocationPosition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    room: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('room') }})
    

@dataclass_json
@dataclasses.dataclass
class PostGeofencesV2RequestBodyPoiDefinition:
    r"""PostGeofencesV2RequestBodyPoiDefinition
    An object that defines the area of a POI geofence.
    """
    
    floor: Optional[PostGeofencesV2RequestBodyPoiDefinitionFloor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floor') }})
    location: Optional[PostGeofencesV2RequestBodyPoiDefinitionLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    
class PostGeofencesV2RequestBodyPoiTypeEnum(str, Enum):
    POI = "poi"


@dataclass_json
@dataclasses.dataclass
class PostGeofencesV2RequestBodyPoi:
    type: PostGeofencesV2RequestBodyPoiTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    definition: Optional[PostGeofencesV2RequestBodyPoiDefinition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('definition') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclasses.dataclass
class PostGeofencesV2Security:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class PostGeofencesV2201ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostGeofencesV2400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostGeofencesV2401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostGeofencesV2403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class PostGeofencesV2Request:
    headers: PostGeofencesV2Headers = dataclasses.field()
    query_params: PostGeofencesV2QueryParams = dataclasses.field()
    security: PostGeofencesV2Security = dataclasses.field()
    request: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostGeofencesV2Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_geofences_v2_201_application_json_object: Optional[PostGeofencesV2201ApplicationJSON] = dataclasses.field(default=None)
    post_geofences_v2_400_application_json_object: Optional[PostGeofencesV2400ApplicationJSON] = dataclasses.field(default=None)
    post_geofences_v2_401_application_json_object: Optional[PostGeofencesV2401ApplicationJSON] = dataclasses.field(default=None)
    post_geofences_v2_403_application_json_object: Optional[PostGeofencesV2403ApplicationJSON] = dataclasses.field(default=None)
    
