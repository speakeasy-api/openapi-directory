import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import error as shared_error


@dataclasses.dataclass
class SendUserEmailConfirmationPathParams:
    user_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SendUserEmailConfirmationSecurity:
    mwo_auth: shared_security.SchemeMwoAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    
class SendUserEmailConfirmation200ApplicationJSONStatusEnum(str, Enum):
    SUCCESS = "success"


@dataclass_json
@dataclasses.dataclass
class SendUserEmailConfirmation200ApplicationJSON:
    status: Optional[SendUserEmailConfirmation200ApplicationJSONStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
class SendUserEmailConfirmation202ApplicationJSONStatusEnum(str, Enum):
    ALREADY_CONFIRMED = "already_confirmed"


@dataclass_json
@dataclasses.dataclass
class SendUserEmailConfirmation202ApplicationJSON:
    status: Optional[SendUserEmailConfirmation202ApplicationJSONStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclasses.dataclass
class SendUserEmailConfirmationRequest:
    path_params: SendUserEmailConfirmationPathParams = dataclasses.field()
    security: SendUserEmailConfirmationSecurity = dataclasses.field()
    

@dataclasses.dataclass
class SendUserEmailConfirmationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    send_user_email_confirmation_200_application_json_object: Optional[SendUserEmailConfirmation200ApplicationJSON] = dataclasses.field(default=None)
    send_user_email_confirmation_202_application_json_object: Optional[SendUserEmailConfirmation202ApplicationJSON] = dataclasses.field(default=None)
    
