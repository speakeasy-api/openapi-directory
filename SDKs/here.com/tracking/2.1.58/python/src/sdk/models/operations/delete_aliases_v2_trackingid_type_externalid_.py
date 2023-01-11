import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteAliasesV2TrackingIDTypeExternalIDPathParams:
    external_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'externalId', 'style': 'simple', 'explode': False }})
    tracking_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'trackingId', 'style': 'simple', 'explode': False }})
    type: str = dataclasses.field(metadata={'path_param': { 'field_name': 'type', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteAliasesV2TrackingIDTypeExternalIDQueryParams:
    app_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'appId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DeleteAliasesV2TrackingIDTypeExternalIDHeaders:
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteAliasesV2TrackingIDTypeExternalIDSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteAliasesV2TrackingIDTypeExternalID400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteAliasesV2TrackingIDTypeExternalID401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteAliasesV2TrackingIDTypeExternalID403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteAliasesV2TrackingIDTypeExternalID404ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class DeleteAliasesV2TrackingIDTypeExternalIDRequest:
    headers: DeleteAliasesV2TrackingIDTypeExternalIDHeaders = dataclasses.field()
    path_params: DeleteAliasesV2TrackingIDTypeExternalIDPathParams = dataclasses.field()
    query_params: DeleteAliasesV2TrackingIDTypeExternalIDQueryParams = dataclasses.field()
    security: DeleteAliasesV2TrackingIDTypeExternalIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteAliasesV2TrackingIDTypeExternalIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_aliases_v2_tracking_id_type_external_id_400_application_json_object: Optional[DeleteAliasesV2TrackingIDTypeExternalID400ApplicationJSON] = dataclasses.field(default=None)
    delete_aliases_v2_tracking_id_type_external_id_401_application_json_object: Optional[DeleteAliasesV2TrackingIDTypeExternalID401ApplicationJSON] = dataclasses.field(default=None)
    delete_aliases_v2_tracking_id_type_external_id_403_application_json_object: Optional[DeleteAliasesV2TrackingIDTypeExternalID403ApplicationJSON] = dataclasses.field(default=None)
    delete_aliases_v2_tracking_id_type_external_id_404_application_json_object: Optional[DeleteAliasesV2TrackingIDTypeExternalID404ApplicationJSON] = dataclasses.field(default=None)
    
