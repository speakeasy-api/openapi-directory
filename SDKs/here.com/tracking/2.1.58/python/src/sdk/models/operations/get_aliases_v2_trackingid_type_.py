import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetAliasesV2TrackingIDTypePathParams:
    tracking_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'trackingId', 'style': 'simple', 'explode': False }})
    type: str = dataclasses.field(metadata={'path_param': { 'field_name': 'type', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAliasesV2TrackingIDTypeQueryParams:
    app_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'appId', 'style': 'form', 'explode': True }})
    count: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAliasesV2TrackingIDTypeHeaders:
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAliasesV2TrackingIDTypeSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class GetAliasesV2TrackingIDType200ApplicationJSON:
    count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageToken') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAliasesV2TrackingIDType400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAliasesV2TrackingIDType401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAliasesV2TrackingIDType403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAliasesV2TrackingIDType404ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class GetAliasesV2TrackingIDTypeRequest:
    headers: GetAliasesV2TrackingIDTypeHeaders = dataclasses.field()
    path_params: GetAliasesV2TrackingIDTypePathParams = dataclasses.field()
    query_params: GetAliasesV2TrackingIDTypeQueryParams = dataclasses.field()
    security: GetAliasesV2TrackingIDTypeSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAliasesV2TrackingIDTypeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_aliases_v2_tracking_id_type_200_application_json_object: Optional[GetAliasesV2TrackingIDType200ApplicationJSON] = dataclasses.field(default=None)
    get_aliases_v2_tracking_id_type_400_application_json_object: Optional[GetAliasesV2TrackingIDType400ApplicationJSON] = dataclasses.field(default=None)
    get_aliases_v2_tracking_id_type_401_application_json_object: Optional[GetAliasesV2TrackingIDType401ApplicationJSON] = dataclasses.field(default=None)
    get_aliases_v2_tracking_id_type_403_application_json_object: Optional[GetAliasesV2TrackingIDType403ApplicationJSON] = dataclasses.field(default=None)
    get_aliases_v2_tracking_id_type_404_application_json_object: Optional[GetAliasesV2TrackingIDType404ApplicationJSON] = dataclasses.field(default=None)
    
