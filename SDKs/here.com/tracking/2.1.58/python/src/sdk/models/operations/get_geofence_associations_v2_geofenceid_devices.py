import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetGeofenceAssociationsV2GeofenceIDDevicesPathParams:
    geofence_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'geofenceId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetGeofenceAssociationsV2GeofenceIDDevicesQueryParams:
    count: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetGeofenceAssociationsV2GeofenceIDDevicesHeaders:
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetGeofenceAssociationsV2GeofenceIDDevicesSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class GetGeofenceAssociationsV2GeofenceIDDevices200ApplicationJSONData:
    r"""GetGeofenceAssociationsV2GeofenceIDDevices200ApplicationJSONData
    Response body contains a single device object.
    
    """
    
    tracking_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingId') }})
    app_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appId') }})
    external_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalId') }})
    

@dataclass_json
@dataclasses.dataclass
class GetGeofenceAssociationsV2GeofenceIDDevices200ApplicationJSON:
    r"""GetGeofenceAssociationsV2GeofenceIDDevices200ApplicationJSON
    Response body contains an array of device objects, count indicating the number of returned devices,
    and pageToken if available. If no devices are found, an object with empty data array is returned.
    
    """
    
    count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    data: Optional[list[GetGeofenceAssociationsV2GeofenceIDDevices200ApplicationJSONData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageToken') }})
    

@dataclass_json
@dataclasses.dataclass
class GetGeofenceAssociationsV2GeofenceIDDevices400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetGeofenceAssociationsV2GeofenceIDDevices401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetGeofenceAssociationsV2GeofenceIDDevices403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetGeofenceAssociationsV2GeofenceIDDevices404ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class GetGeofenceAssociationsV2GeofenceIDDevicesRequest:
    headers: GetGeofenceAssociationsV2GeofenceIDDevicesHeaders = dataclasses.field()
    path_params: GetGeofenceAssociationsV2GeofenceIDDevicesPathParams = dataclasses.field()
    query_params: GetGeofenceAssociationsV2GeofenceIDDevicesQueryParams = dataclasses.field()
    security: GetGeofenceAssociationsV2GeofenceIDDevicesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetGeofenceAssociationsV2GeofenceIDDevicesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_geofence_associations_v2_geofence_id_devices_200_application_json_object: Optional[GetGeofenceAssociationsV2GeofenceIDDevices200ApplicationJSON] = dataclasses.field(default=None)
    get_geofence_associations_v2_geofence_id_devices_400_application_json_object: Optional[GetGeofenceAssociationsV2GeofenceIDDevices400ApplicationJSON] = dataclasses.field(default=None)
    get_geofence_associations_v2_geofence_id_devices_401_application_json_object: Optional[GetGeofenceAssociationsV2GeofenceIDDevices401ApplicationJSON] = dataclasses.field(default=None)
    get_geofence_associations_v2_geofence_id_devices_403_application_json_object: Optional[GetGeofenceAssociationsV2GeofenceIDDevices403ApplicationJSON] = dataclasses.field(default=None)
    get_geofence_associations_v2_geofence_id_devices_404_application_json_object: Optional[GetGeofenceAssociationsV2GeofenceIDDevices404ApplicationJSON] = dataclasses.field(default=None)
    
