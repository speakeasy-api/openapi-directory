import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetMetadataV2DevicesTrackingIDPathParams:
    tracking_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'trackingId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetMetadataV2DevicesTrackingIDQueryParams:
    app_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'appId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetMetadataV2DevicesTrackingIDHeaders:
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetMetadataV2DevicesTrackingIDSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class GetMetadataV2DevicesTrackingID200ApplicationJSON:
    data: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    id: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class GetMetadataV2DevicesTrackingID400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetMetadataV2DevicesTrackingID401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetMetadataV2DevicesTrackingID403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetMetadataV2DevicesTrackingID404ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class GetMetadataV2DevicesTrackingIDRequest:
    headers: GetMetadataV2DevicesTrackingIDHeaders = dataclasses.field()
    path_params: GetMetadataV2DevicesTrackingIDPathParams = dataclasses.field()
    query_params: GetMetadataV2DevicesTrackingIDQueryParams = dataclasses.field()
    security: GetMetadataV2DevicesTrackingIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetMetadataV2DevicesTrackingIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_metadata_v2_devices_tracking_id_200_application_json_object: Optional[GetMetadataV2DevicesTrackingID200ApplicationJSON] = dataclasses.field(default=None)
    get_metadata_v2_devices_tracking_id_400_application_json_object: Optional[GetMetadataV2DevicesTrackingID400ApplicationJSON] = dataclasses.field(default=None)
    get_metadata_v2_devices_tracking_id_401_application_json_object: Optional[GetMetadataV2DevicesTrackingID401ApplicationJSON] = dataclasses.field(default=None)
    get_metadata_v2_devices_tracking_id_403_application_json_object: Optional[GetMetadataV2DevicesTrackingID403ApplicationJSON] = dataclasses.field(default=None)
    get_metadata_v2_devices_tracking_id_404_application_json_object: Optional[GetMetadataV2DevicesTrackingID404ApplicationJSON] = dataclasses.field(default=None)
    
