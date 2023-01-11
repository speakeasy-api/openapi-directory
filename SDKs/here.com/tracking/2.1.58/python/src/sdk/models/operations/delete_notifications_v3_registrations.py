import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteNotificationsV3RegistrationsQueryParams:
    project_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'projectId', 'style': 'form', 'explode': True }})
    
class DeleteNotificationsV3RegistrationsXConfirmEnum(str, Enum):
    TRUE = "true"


@dataclasses.dataclass
class DeleteNotificationsV3RegistrationsHeaders:
    x_confirm: DeleteNotificationsV3RegistrationsXConfirmEnum = dataclasses.field(metadata={'header': { 'field_name': 'x-confirm', 'style': 'simple', 'explode': False }})
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteNotificationsV3RegistrationsSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteNotificationsV3Registrations400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteNotificationsV3Registrations401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteNotificationsV3Registrations403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class DeleteNotificationsV3RegistrationsRequest:
    headers: DeleteNotificationsV3RegistrationsHeaders = dataclasses.field()
    query_params: DeleteNotificationsV3RegistrationsQueryParams = dataclasses.field()
    security: DeleteNotificationsV3RegistrationsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteNotificationsV3RegistrationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_notifications_v3_registrations_400_application_json_object: Optional[DeleteNotificationsV3Registrations400ApplicationJSON] = dataclasses.field(default=None)
    delete_notifications_v3_registrations_401_application_json_object: Optional[DeleteNotificationsV3Registrations401ApplicationJSON] = dataclasses.field(default=None)
    delete_notifications_v3_registrations_403_application_json_object: Optional[DeleteNotificationsV3Registrations403ApplicationJSON] = dataclasses.field(default=None)
    
