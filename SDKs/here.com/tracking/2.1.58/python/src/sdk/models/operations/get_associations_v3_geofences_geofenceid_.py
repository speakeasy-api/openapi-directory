import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetAssociationsV3GeofencesGeofenceIDPathParams:
    geofence_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'geofenceId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAssociationsV3GeofencesGeofenceIDQueryParams:
    count: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAssociationsV3GeofencesGeofenceIDHeaders:
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAssociationsV3GeofencesGeofenceIDSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class GetAssociationsV3GeofencesGeofenceID200ApplicationJSONData:
    r"""GetAssociationsV3GeofencesGeofenceID200ApplicationJSONData
    Response body contains a single device object.
    
    """
    
    tracking_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingId') }})
    app_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appId') }})
    external_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalId') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAssociationsV3GeofencesGeofenceID200ApplicationJSON:
    r"""GetAssociationsV3GeofencesGeofenceID200ApplicationJSON
    Response body contains an array of device objects, count indicating the number of returned devices,
    and pageToken if available. If no devices are found, an object with empty data array is returned.
    
    """
    
    count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    data: Optional[list[GetAssociationsV3GeofencesGeofenceID200ApplicationJSONData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageToken') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAssociationsV3GeofencesGeofenceID400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAssociationsV3GeofencesGeofenceID401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAssociationsV3GeofencesGeofenceID403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAssociationsV3GeofencesGeofenceID404ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class GetAssociationsV3GeofencesGeofenceIDRequest:
    headers: GetAssociationsV3GeofencesGeofenceIDHeaders = dataclasses.field()
    path_params: GetAssociationsV3GeofencesGeofenceIDPathParams = dataclasses.field()
    query_params: GetAssociationsV3GeofencesGeofenceIDQueryParams = dataclasses.field()
    security: GetAssociationsV3GeofencesGeofenceIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAssociationsV3GeofencesGeofenceIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_associations_v3_geofences_geofence_id_200_application_json_object: Optional[GetAssociationsV3GeofencesGeofenceID200ApplicationJSON] = dataclasses.field(default=None)
    get_associations_v3_geofences_geofence_id_400_application_json_object: Optional[GetAssociationsV3GeofencesGeofenceID400ApplicationJSON] = dataclasses.field(default=None)
    get_associations_v3_geofences_geofence_id_401_application_json_object: Optional[GetAssociationsV3GeofencesGeofenceID401ApplicationJSON] = dataclasses.field(default=None)
    get_associations_v3_geofences_geofence_id_403_application_json_object: Optional[GetAssociationsV3GeofencesGeofenceID403ApplicationJSON] = dataclasses.field(default=None)
    get_associations_v3_geofences_geofence_id_404_application_json_object: Optional[GetAssociationsV3GeofencesGeofenceID404ApplicationJSON] = dataclasses.field(default=None)
    
