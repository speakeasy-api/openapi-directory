import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteGeofenceAssociationsV2GeofenceIDTrackingIDPathParams:
    geofence_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'geofenceId', 'style': 'simple', 'explode': False }})
    tracking_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'trackingId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteGeofenceAssociationsV2GeofenceIDTrackingIDQueryParams:
    app_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'appId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DeleteGeofenceAssociationsV2GeofenceIDTrackingIDHeaders:
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteGeofenceAssociationsV2GeofenceIDTrackingIDSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteGeofenceAssociationsV2GeofenceIDTrackingID400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteGeofenceAssociationsV2GeofenceIDTrackingID401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteGeofenceAssociationsV2GeofenceIDTrackingID403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteGeofenceAssociationsV2GeofenceIDTrackingID404ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class DeleteGeofenceAssociationsV2GeofenceIDTrackingIDRequest:
    headers: DeleteGeofenceAssociationsV2GeofenceIDTrackingIDHeaders = dataclasses.field()
    path_params: DeleteGeofenceAssociationsV2GeofenceIDTrackingIDPathParams = dataclasses.field()
    query_params: DeleteGeofenceAssociationsV2GeofenceIDTrackingIDQueryParams = dataclasses.field()
    security: DeleteGeofenceAssociationsV2GeofenceIDTrackingIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteGeofenceAssociationsV2GeofenceIDTrackingIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_geofence_associations_v2_geofence_id_tracking_id_400_application_json_object: Optional[DeleteGeofenceAssociationsV2GeofenceIDTrackingID400ApplicationJSON] = dataclasses.field(default=None)
    delete_geofence_associations_v2_geofence_id_tracking_id_401_application_json_object: Optional[DeleteGeofenceAssociationsV2GeofenceIDTrackingID401ApplicationJSON] = dataclasses.field(default=None)
    delete_geofence_associations_v2_geofence_id_tracking_id_403_application_json_object: Optional[DeleteGeofenceAssociationsV2GeofenceIDTrackingID403ApplicationJSON] = dataclasses.field(default=None)
    delete_geofence_associations_v2_geofence_id_tracking_id_404_application_json_object: Optional[DeleteGeofenceAssociationsV2GeofenceIDTrackingID404ApplicationJSON] = dataclasses.field(default=None)
    
