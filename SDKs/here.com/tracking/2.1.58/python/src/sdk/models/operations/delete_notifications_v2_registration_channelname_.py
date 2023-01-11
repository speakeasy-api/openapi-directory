import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteNotificationsV2RegistrationChannelNamePathParams:
    channel_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'channelName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteNotificationsV2RegistrationChannelNameQueryParams:
    project_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'projectId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DeleteNotificationsV2RegistrationChannelNameHeaders:
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteNotificationsV2RegistrationChannelNameSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
class DeleteNotificationsV2RegistrationChannelName200ApplicationJSONMessageEnum(str, Enum):
    CREATED = "created"
    UPDATED = "updated"
    DELETED = "deleted"

class DeleteNotificationsV2RegistrationChannelName200ApplicationJSONStatusEnum(str, Enum):
    OK = "ok"


@dataclass_json
@dataclasses.dataclass
class DeleteNotificationsV2RegistrationChannelName200ApplicationJSON:
    message: Optional[DeleteNotificationsV2RegistrationChannelName200ApplicationJSONMessageEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    status: Optional[DeleteNotificationsV2RegistrationChannelName200ApplicationJSONStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteNotificationsV2RegistrationChannelName400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteNotificationsV2RegistrationChannelName401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteNotificationsV2RegistrationChannelName403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class DeleteNotificationsV2RegistrationChannelNameRequest:
    headers: DeleteNotificationsV2RegistrationChannelNameHeaders = dataclasses.field()
    path_params: DeleteNotificationsV2RegistrationChannelNamePathParams = dataclasses.field()
    query_params: DeleteNotificationsV2RegistrationChannelNameQueryParams = dataclasses.field()
    security: DeleteNotificationsV2RegistrationChannelNameSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteNotificationsV2RegistrationChannelNameResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_notifications_v2_registration_channel_name_200_application_json_object: Optional[DeleteNotificationsV2RegistrationChannelName200ApplicationJSON] = dataclasses.field(default=None)
    delete_notifications_v2_registration_channel_name_400_application_json_object: Optional[DeleteNotificationsV2RegistrationChannelName400ApplicationJSON] = dataclasses.field(default=None)
    delete_notifications_v2_registration_channel_name_401_application_json_object: Optional[DeleteNotificationsV2RegistrationChannelName401ApplicationJSON] = dataclasses.field(default=None)
    delete_notifications_v2_registration_channel_name_403_application_json_object: Optional[DeleteNotificationsV2RegistrationChannelName403ApplicationJSON] = dataclasses.field(default=None)
    
