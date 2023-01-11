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
class PostNotificationsV2RegisterQueryParams:
    project_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'projectId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostNotificationsV2RegisterHeaders:
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    
class PostNotificationsV2RegisterRequestBodyTypeEnum(str, Enum):
    WEBHOOK = "webhook"


@dataclass_json
@dataclasses.dataclass
class PostNotificationsV2RegisterRequestBody:
    type: Optional[PostNotificationsV2RegisterRequestBodyTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclasses.dataclass
class PostNotificationsV2RegisterSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
class PostNotificationsV2Register200ApplicationJSONMessageEnum(str, Enum):
    CREATED = "created"
    UPDATED = "updated"
    DELETED = "deleted"

class PostNotificationsV2Register200ApplicationJSONStatusEnum(str, Enum):
    OK = "ok"


@dataclass_json
@dataclasses.dataclass
class PostNotificationsV2Register200ApplicationJSON:
    message: Optional[PostNotificationsV2Register200ApplicationJSONMessageEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    status: Optional[PostNotificationsV2Register200ApplicationJSONStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
class PostNotificationsV2Register201ApplicationJSONMessageEnum(str, Enum):
    CREATED = "created"
    UPDATED = "updated"
    DELETED = "deleted"

class PostNotificationsV2Register201ApplicationJSONStatusEnum(str, Enum):
    OK = "ok"


@dataclass_json
@dataclasses.dataclass
class PostNotificationsV2Register201ApplicationJSON:
    message: Optional[PostNotificationsV2Register201ApplicationJSONMessageEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    status: Optional[PostNotificationsV2Register201ApplicationJSONStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class PostNotificationsV2Register400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostNotificationsV2Register401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostNotificationsV2Register403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class PostNotificationsV2RegisterRequest:
    headers: PostNotificationsV2RegisterHeaders = dataclasses.field()
    query_params: PostNotificationsV2RegisterQueryParams = dataclasses.field()
    security: PostNotificationsV2RegisterSecurity = dataclasses.field()
    request: Optional[PostNotificationsV2RegisterRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostNotificationsV2RegisterResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_notifications_v2_register_200_application_json_object: Optional[PostNotificationsV2Register200ApplicationJSON] = dataclasses.field(default=None)
    post_notifications_v2_register_201_application_json_object: Optional[PostNotificationsV2Register201ApplicationJSON] = dataclasses.field(default=None)
    post_notifications_v2_register_400_application_json_object: Optional[PostNotificationsV2Register400ApplicationJSON] = dataclasses.field(default=None)
    post_notifications_v2_register_401_application_json_object: Optional[PostNotificationsV2Register401ApplicationJSON] = dataclasses.field(default=None)
    post_notifications_v2_register_403_application_json_object: Optional[PostNotificationsV2Register403ApplicationJSON] = dataclasses.field(default=None)
    
