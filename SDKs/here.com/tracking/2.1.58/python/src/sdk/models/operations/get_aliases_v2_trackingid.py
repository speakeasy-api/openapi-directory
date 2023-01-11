import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..operations import security as operations_security


@dataclasses.dataclass
class GetAliasesV2TrackingIDQueryParams:
    external_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'externalId', 'style': 'form', 'explode': True }})
    type: str = dataclasses.field(metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    project_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'projectId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAliasesV2TrackingIDHeaders:
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAliasesV2TrackingIDSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class GetAliasesV2TrackingID200ApplicationJSON:
    tracking_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingId') }})
    app_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appId') }})
    external_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalId') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAliasesV2TrackingID400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAliasesV2TrackingID401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAliasesV2TrackingID403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAliasesV2TrackingID404ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class GetAliasesV2TrackingIDRequest:
    headers: operations_get_aliases_v2_trackingid_.GetAliasesV2TrackingIDHeaders = dataclasses.field()
    query_params: GetAliasesV2TrackingIDQueryParams = dataclasses.field()
    security: GetAliasesV2TrackingIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAliasesV2TrackingIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_aliases_v2_tracking_id_200_application_json_object: Optional[GetAliasesV2TrackingID200ApplicationJSON] = dataclasses.field(default=None)
    get_aliases_v2_tracking_id_400_application_json_object: Optional[operations_get_aliases_v2_trackingid_.GetAliasesV2TrackingID400ApplicationJSON] = dataclasses.field(default=None)
    get_aliases_v2_tracking_id_401_application_json_object: Optional[operations_get_aliases_v2_trackingid_.GetAliasesV2TrackingID401ApplicationJSON] = dataclasses.field(default=None)
    get_aliases_v2_tracking_id_403_application_json_object: Optional[operations_get_aliases_v2_trackingid_.GetAliasesV2TrackingID403ApplicationJSON] = dataclasses.field(default=None)
    get_aliases_v2_tracking_id_404_application_json_object: Optional[operations_get_aliases_v2_trackingid_.GetAliasesV2TrackingID404ApplicationJSON] = dataclasses.field(default=None)
    
