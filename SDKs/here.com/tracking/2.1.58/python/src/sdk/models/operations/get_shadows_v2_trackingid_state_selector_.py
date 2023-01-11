import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security

class GetShadowsV2TrackingIDStateSelectorStateEnum(str, Enum):
    DESIRED = "desired"
    REPORTED = "reported"


@dataclasses.dataclass
class GetShadowsV2TrackingIDStateSelectorPathParams:
    selector: str = dataclasses.field(metadata={'path_param': { 'field_name': 'selector', 'style': 'simple', 'explode': False }})
    state: GetShadowsV2TrackingIDStateSelectorStateEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'state', 'style': 'simple', 'explode': False }})
    tracking_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'trackingId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetShadowsV2TrackingIDStateSelectorQueryParams:
    app_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'appId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetShadowsV2TrackingIDStateSelectorHeaders:
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetShadowsV2TrackingIDStateSelectorSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class GetShadowsV2TrackingIDStateSelector400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetShadowsV2TrackingIDStateSelector401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetShadowsV2TrackingIDStateSelector403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetShadowsV2TrackingIDStateSelector404ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetShadowsV2TrackingIDStateSelector422ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class GetShadowsV2TrackingIDStateSelectorRequest:
    headers: GetShadowsV2TrackingIDStateSelectorHeaders = dataclasses.field()
    path_params: GetShadowsV2TrackingIDStateSelectorPathParams = dataclasses.field()
    query_params: GetShadowsV2TrackingIDStateSelectorQueryParams = dataclasses.field()
    security: GetShadowsV2TrackingIDStateSelectorSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetShadowsV2TrackingIDStateSelectorResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_shadows_v2_tracking_id_state_selector_200_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    get_shadows_v2_tracking_id_state_selector_200_text_plain_string: Optional[str] = dataclasses.field(default=None)
    get_shadows_v2_tracking_id_state_selector_400_application_json_object: Optional[GetShadowsV2TrackingIDStateSelector400ApplicationJSON] = dataclasses.field(default=None)
    get_shadows_v2_tracking_id_state_selector_401_application_json_object: Optional[GetShadowsV2TrackingIDStateSelector401ApplicationJSON] = dataclasses.field(default=None)
    get_shadows_v2_tracking_id_state_selector_403_application_json_object: Optional[GetShadowsV2TrackingIDStateSelector403ApplicationJSON] = dataclasses.field(default=None)
    get_shadows_v2_tracking_id_state_selector_404_application_json_object: Optional[GetShadowsV2TrackingIDStateSelector404ApplicationJSON] = dataclasses.field(default=None)
    get_shadows_v2_tracking_id_state_selector_422_application_json_object: Optional[GetShadowsV2TrackingIDStateSelector422ApplicationJSON] = dataclasses.field(default=None)
    
