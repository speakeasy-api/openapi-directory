import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class PutAssociationsV3TrackingIDGeofencesGeofenceIDPathParams:
    geofence_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'geofenceId', 'style': 'simple', 'explode': False }})
    tracking_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'trackingId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutAssociationsV3TrackingIDGeofencesGeofenceIDQueryParams:
    app_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'appId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PutAssociationsV3TrackingIDGeofencesGeofenceIDHeaders:
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutAssociationsV3TrackingIDGeofencesGeofenceIDSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class PutAssociationsV3TrackingIDGeofencesGeofenceID400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PutAssociationsV3TrackingIDGeofencesGeofenceID401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PutAssociationsV3TrackingIDGeofencesGeofenceID403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PutAssociationsV3TrackingIDGeofencesGeofenceID404ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class PutAssociationsV3TrackingIDGeofencesGeofenceIDRequest:
    headers: PutAssociationsV3TrackingIDGeofencesGeofenceIDHeaders = dataclasses.field()
    path_params: PutAssociationsV3TrackingIDGeofencesGeofenceIDPathParams = dataclasses.field()
    query_params: PutAssociationsV3TrackingIDGeofencesGeofenceIDQueryParams = dataclasses.field()
    security: PutAssociationsV3TrackingIDGeofencesGeofenceIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PutAssociationsV3TrackingIDGeofencesGeofenceIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    put_associations_v3_tracking_id_geofences_geofence_id_400_application_json_object: Optional[PutAssociationsV3TrackingIDGeofencesGeofenceID400ApplicationJSON] = dataclasses.field(default=None)
    put_associations_v3_tracking_id_geofences_geofence_id_401_application_json_object: Optional[PutAssociationsV3TrackingIDGeofencesGeofenceID401ApplicationJSON] = dataclasses.field(default=None)
    put_associations_v3_tracking_id_geofences_geofence_id_403_application_json_object: Optional[PutAssociationsV3TrackingIDGeofencesGeofenceID403ApplicationJSON] = dataclasses.field(default=None)
    put_associations_v3_tracking_id_geofences_geofence_id_404_application_json_object: Optional[PutAssociationsV3TrackingIDGeofencesGeofenceID404ApplicationJSON] = dataclasses.field(default=None)
    
