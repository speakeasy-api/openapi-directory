import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteAliasesV2TrackingIDTypePathParams:
    tracking_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'trackingId', 'style': 'simple', 'explode': False }})
    type: str = dataclasses.field(metadata={'path_param': { 'field_name': 'type', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteAliasesV2TrackingIDTypeQueryParams:
    app_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'appId', 'style': 'form', 'explode': True }})
    
class DeleteAliasesV2TrackingIDTypeXConfirmEnum(str, Enum):
    TRUE = "true"


@dataclasses.dataclass
class DeleteAliasesV2TrackingIDTypeHeaders:
    x_confirm: DeleteAliasesV2TrackingIDTypeXConfirmEnum = dataclasses.field(metadata={'header': { 'field_name': 'x-confirm', 'style': 'simple', 'explode': False }})
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteAliasesV2TrackingIDTypeSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteAliasesV2TrackingIDType400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteAliasesV2TrackingIDType401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteAliasesV2TrackingIDType403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteAliasesV2TrackingIDType404ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class DeleteAliasesV2TrackingIDTypeRequest:
    headers: DeleteAliasesV2TrackingIDTypeHeaders = dataclasses.field()
    path_params: DeleteAliasesV2TrackingIDTypePathParams = dataclasses.field()
    query_params: DeleteAliasesV2TrackingIDTypeQueryParams = dataclasses.field()
    security: DeleteAliasesV2TrackingIDTypeSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteAliasesV2TrackingIDTypeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_aliases_v2_tracking_id_type_400_application_json_object: Optional[DeleteAliasesV2TrackingIDType400ApplicationJSON] = dataclasses.field(default=None)
    delete_aliases_v2_tracking_id_type_401_application_json_object: Optional[DeleteAliasesV2TrackingIDType401ApplicationJSON] = dataclasses.field(default=None)
    delete_aliases_v2_tracking_id_type_403_application_json_object: Optional[DeleteAliasesV2TrackingIDType403ApplicationJSON] = dataclasses.field(default=None)
    delete_aliases_v2_tracking_id_type_404_application_json_object: Optional[DeleteAliasesV2TrackingIDType404ApplicationJSON] = dataclasses.field(default=None)
    
