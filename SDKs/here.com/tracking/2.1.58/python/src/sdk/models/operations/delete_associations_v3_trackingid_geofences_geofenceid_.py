import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteAssociationsV3TrackingIDGeofencesGeofenceIDPathParams:
    geofence_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'geofenceId', 'style': 'simple', 'explode': False }})
    tracking_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'trackingId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteAssociationsV3TrackingIDGeofencesGeofenceIDQueryParams:
    app_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'appId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DeleteAssociationsV3TrackingIDGeofencesGeofenceIDHeaders:
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteAssociationsV3TrackingIDGeofencesGeofenceIDSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteAssociationsV3TrackingIDGeofencesGeofenceID400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteAssociationsV3TrackingIDGeofencesGeofenceID401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteAssociationsV3TrackingIDGeofencesGeofenceID403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteAssociationsV3TrackingIDGeofencesGeofenceID404ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class DeleteAssociationsV3TrackingIDGeofencesGeofenceIDRequest:
    headers: DeleteAssociationsV3TrackingIDGeofencesGeofenceIDHeaders = dataclasses.field()
    path_params: DeleteAssociationsV3TrackingIDGeofencesGeofenceIDPathParams = dataclasses.field()
    query_params: DeleteAssociationsV3TrackingIDGeofencesGeofenceIDQueryParams = dataclasses.field()
    security: DeleteAssociationsV3TrackingIDGeofencesGeofenceIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteAssociationsV3TrackingIDGeofencesGeofenceIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_associations_v3_tracking_id_geofences_geofence_id_400_application_json_object: Optional[DeleteAssociationsV3TrackingIDGeofencesGeofenceID400ApplicationJSON] = dataclasses.field(default=None)
    delete_associations_v3_tracking_id_geofences_geofence_id_401_application_json_object: Optional[DeleteAssociationsV3TrackingIDGeofencesGeofenceID401ApplicationJSON] = dataclasses.field(default=None)
    delete_associations_v3_tracking_id_geofences_geofence_id_403_application_json_object: Optional[DeleteAssociationsV3TrackingIDGeofencesGeofenceID403ApplicationJSON] = dataclasses.field(default=None)
    delete_associations_v3_tracking_id_geofences_geofence_id_404_application_json_object: Optional[DeleteAssociationsV3TrackingIDGeofencesGeofenceID404ApplicationJSON] = dataclasses.field(default=None)
    
