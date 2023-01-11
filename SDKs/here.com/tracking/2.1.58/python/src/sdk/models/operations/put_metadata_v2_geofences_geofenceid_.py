import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class PutMetadataV2GeofencesGeofenceIDPathParams:
    geofence_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'geofenceId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutMetadataV2GeofencesGeofenceIDHeaders:
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutMetadataV2GeofencesGeofenceIDSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class PutMetadataV2GeofencesGeofenceID200ApplicationJSON:
    data: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    id: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class PutMetadataV2GeofencesGeofenceID400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PutMetadataV2GeofencesGeofenceID401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PutMetadataV2GeofencesGeofenceID403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PutMetadataV2GeofencesGeofenceID404ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class PutMetadataV2GeofencesGeofenceIDRequest:
    headers: PutMetadataV2GeofencesGeofenceIDHeaders = dataclasses.field()
    path_params: PutMetadataV2GeofencesGeofenceIDPathParams = dataclasses.field()
    request: dict[str, Any] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PutMetadataV2GeofencesGeofenceIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PutMetadataV2GeofencesGeofenceIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    put_metadata_v2_geofences_geofence_id_200_application_json_object: Optional[PutMetadataV2GeofencesGeofenceID200ApplicationJSON] = dataclasses.field(default=None)
    put_metadata_v2_geofences_geofence_id_400_application_json_object: Optional[PutMetadataV2GeofencesGeofenceID400ApplicationJSON] = dataclasses.field(default=None)
    put_metadata_v2_geofences_geofence_id_401_application_json_object: Optional[PutMetadataV2GeofencesGeofenceID401ApplicationJSON] = dataclasses.field(default=None)
    put_metadata_v2_geofences_geofence_id_403_application_json_object: Optional[PutMetadataV2GeofencesGeofenceID403ApplicationJSON] = dataclasses.field(default=None)
    put_metadata_v2_geofences_geofence_id_404_application_json_object: Optional[PutMetadataV2GeofencesGeofenceID404ApplicationJSON] = dataclasses.field(default=None)
    
