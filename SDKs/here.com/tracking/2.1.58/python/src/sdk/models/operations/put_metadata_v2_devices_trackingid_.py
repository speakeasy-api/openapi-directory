import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class PutMetadataV2DevicesTrackingIDPathParams:
    tracking_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'trackingId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutMetadataV2DevicesTrackingIDQueryParams:
    app_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'appId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PutMetadataV2DevicesTrackingIDHeaders:
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutMetadataV2DevicesTrackingIDSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class PutMetadataV2DevicesTrackingID200ApplicationJSON:
    data: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    id: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class PutMetadataV2DevicesTrackingID400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PutMetadataV2DevicesTrackingID401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PutMetadataV2DevicesTrackingID403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PutMetadataV2DevicesTrackingID404ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class PutMetadataV2DevicesTrackingIDRequest:
    headers: PutMetadataV2DevicesTrackingIDHeaders = dataclasses.field()
    path_params: PutMetadataV2DevicesTrackingIDPathParams = dataclasses.field()
    query_params: PutMetadataV2DevicesTrackingIDQueryParams = dataclasses.field()
    request: dict[str, Any] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PutMetadataV2DevicesTrackingIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PutMetadataV2DevicesTrackingIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    put_metadata_v2_devices_tracking_id_200_application_json_object: Optional[PutMetadataV2DevicesTrackingID200ApplicationJSON] = dataclasses.field(default=None)
    put_metadata_v2_devices_tracking_id_400_application_json_object: Optional[PutMetadataV2DevicesTrackingID400ApplicationJSON] = dataclasses.field(default=None)
    put_metadata_v2_devices_tracking_id_401_application_json_object: Optional[PutMetadataV2DevicesTrackingID401ApplicationJSON] = dataclasses.field(default=None)
    put_metadata_v2_devices_tracking_id_403_application_json_object: Optional[PutMetadataV2DevicesTrackingID403ApplicationJSON] = dataclasses.field(default=None)
    put_metadata_v2_devices_tracking_id_404_application_json_object: Optional[PutMetadataV2DevicesTrackingID404ApplicationJSON] = dataclasses.field(default=None)
    
