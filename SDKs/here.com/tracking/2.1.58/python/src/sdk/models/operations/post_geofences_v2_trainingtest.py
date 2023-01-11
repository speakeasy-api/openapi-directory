import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class PostGeofencesV2TrainingTestHeaders:
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PostGeofencesV2TrainingTestRequestBody1:
    after: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('after') }})
    before: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('before') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class PostGeofencesV2TrainingTestRequestBody2Wlan:
    r"""PostGeofencesV2TrainingTestRequestBody2Wlan
    WLAN measurement
    """
    
    mac: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mac') }})
    powrx: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('powrx') }})
    band: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('band') }})
    timestamp: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclasses.dataclass
class PostGeofencesV2TrainingTestRequestBody2:
    wlan: list[PostGeofencesV2TrainingTestRequestBody2Wlan] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('wlan') }})
    

@dataclasses.dataclass
class PostGeofencesV2TrainingTestSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class PostGeofencesV2TrainingTest200ApplicationJSONMetadataCoordinate:
    r"""PostGeofencesV2TrainingTest200ApplicationJSONMetadataCoordinate
    Training data position
    """
    
    lat: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    lng: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lng') }})
    

@dataclass_json
@dataclasses.dataclass
class PostGeofencesV2TrainingTest200ApplicationJSONMetadata:
    used_wlan_ap_count: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('usedWlanApCount') }})
    coordinate: Optional[PostGeofencesV2TrainingTest200ApplicationJSONMetadataCoordinate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coordinate') }})
    timestamp: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    tracking_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingId') }})
    

@dataclass_json
@dataclasses.dataclass
class PostGeofencesV2TrainingTest200ApplicationJSON:
    success: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    metadata: Optional[PostGeofencesV2TrainingTest200ApplicationJSONMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    

@dataclass_json
@dataclasses.dataclass
class PostGeofencesV2TrainingTest400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostGeofencesV2TrainingTest401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostGeofencesV2TrainingTest403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostGeofencesV2TrainingTest404ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostGeofencesV2TrainingTest422ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class PostGeofencesV2TrainingTestRequest:
    headers: PostGeofencesV2TrainingTestHeaders = dataclasses.field()
    security: PostGeofencesV2TrainingTestSecurity = dataclasses.field()
    request: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostGeofencesV2TrainingTestResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_geofences_v2_training_test_200_application_json_object: Optional[PostGeofencesV2TrainingTest200ApplicationJSON] = dataclasses.field(default=None)
    post_geofences_v2_training_test_400_application_json_object: Optional[PostGeofencesV2TrainingTest400ApplicationJSON] = dataclasses.field(default=None)
    post_geofences_v2_training_test_401_application_json_object: Optional[PostGeofencesV2TrainingTest401ApplicationJSON] = dataclasses.field(default=None)
    post_geofences_v2_training_test_403_application_json_object: Optional[PostGeofencesV2TrainingTest403ApplicationJSON] = dataclasses.field(default=None)
    post_geofences_v2_training_test_404_application_json_object: Optional[PostGeofencesV2TrainingTest404ApplicationJSON] = dataclasses.field(default=None)
    post_geofences_v2_training_test_422_application_json_object: Optional[PostGeofencesV2TrainingTest422ApplicationJSON] = dataclasses.field(default=None)
    
