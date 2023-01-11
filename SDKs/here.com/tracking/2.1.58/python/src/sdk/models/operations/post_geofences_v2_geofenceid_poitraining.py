import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class PostGeofencesV2GeofenceIDPoiTrainingPathParams:
    geofence_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'geofenceId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostGeofencesV2GeofenceIDPoiTrainingHeaders:
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PostGeofencesV2GeofenceIDPoiTrainingRequestBody1:
    after: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('after') }})
    before: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('before') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class PostGeofencesV2GeofenceIDPoiTrainingRequestBody2Wlan:
    r"""PostGeofencesV2GeofenceIDPoiTrainingRequestBody2Wlan
    WLAN measurement
    """
    
    mac: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mac') }})
    powrx: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('powrx') }})
    band: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('band') }})
    timestamp: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclasses.dataclass
class PostGeofencesV2GeofenceIDPoiTrainingRequestBody2:
    wlan: list[PostGeofencesV2GeofenceIDPoiTrainingRequestBody2Wlan] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('wlan') }})
    

@dataclasses.dataclass
class PostGeofencesV2GeofenceIDPoiTrainingSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class PostGeofencesV2GeofenceIDPoiTraining200ApplicationJSONTrainingStatusMetadataCoordinate:
    r"""PostGeofencesV2GeofenceIDPoiTraining200ApplicationJSONTrainingStatusMetadataCoordinate
    Training data position
    """
    
    lat: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    lng: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lng') }})
    

@dataclass_json
@dataclasses.dataclass
class PostGeofencesV2GeofenceIDPoiTraining200ApplicationJSONTrainingStatusMetadata:
    used_wlan_ap_count: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('usedWlanApCount') }})
    coordinate: Optional[PostGeofencesV2GeofenceIDPoiTraining200ApplicationJSONTrainingStatusMetadataCoordinate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coordinate') }})
    timestamp: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    tracking_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingId') }})
    

@dataclass_json
@dataclasses.dataclass
class PostGeofencesV2GeofenceIDPoiTraining200ApplicationJSONTrainingStatus:
    trained: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('trained') }})
    metadata: Optional[PostGeofencesV2GeofenceIDPoiTraining200ApplicationJSONTrainingStatusMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    

@dataclass_json
@dataclasses.dataclass
class PostGeofencesV2GeofenceIDPoiTraining200ApplicationJSON:
    training_status: PostGeofencesV2GeofenceIDPoiTraining200ApplicationJSONTrainingStatus = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('trainingStatus') }})
    

@dataclass_json
@dataclasses.dataclass
class PostGeofencesV2GeofenceIDPoiTraining400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostGeofencesV2GeofenceIDPoiTraining401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostGeofencesV2GeofenceIDPoiTraining403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostGeofencesV2GeofenceIDPoiTraining404ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostGeofencesV2GeofenceIDPoiTraining422ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class PostGeofencesV2GeofenceIDPoiTrainingRequest:
    headers: PostGeofencesV2GeofenceIDPoiTrainingHeaders = dataclasses.field()
    path_params: PostGeofencesV2GeofenceIDPoiTrainingPathParams = dataclasses.field()
    security: PostGeofencesV2GeofenceIDPoiTrainingSecurity = dataclasses.field()
    request: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostGeofencesV2GeofenceIDPoiTrainingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_geofences_v2_geofence_id_poi_training_200_application_json_object: Optional[PostGeofencesV2GeofenceIDPoiTraining200ApplicationJSON] = dataclasses.field(default=None)
    post_geofences_v2_geofence_id_poi_training_400_application_json_object: Optional[PostGeofencesV2GeofenceIDPoiTraining400ApplicationJSON] = dataclasses.field(default=None)
    post_geofences_v2_geofence_id_poi_training_401_application_json_object: Optional[PostGeofencesV2GeofenceIDPoiTraining401ApplicationJSON] = dataclasses.field(default=None)
    post_geofences_v2_geofence_id_poi_training_403_application_json_object: Optional[PostGeofencesV2GeofenceIDPoiTraining403ApplicationJSON] = dataclasses.field(default=None)
    post_geofences_v2_geofence_id_poi_training_404_application_json_object: Optional[PostGeofencesV2GeofenceIDPoiTraining404ApplicationJSON] = dataclasses.field(default=None)
    post_geofences_v2_geofence_id_poi_training_422_application_json_object: Optional[PostGeofencesV2GeofenceIDPoiTraining422ApplicationJSON] = dataclasses.field(default=None)
    
