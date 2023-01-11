import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SendEmailConfirmation200ApplicationJSONStatusEnum(str, Enum):
    SUCCESS = "success"
    ALREADY_CONFIRMED = "already_confirmed"


@dataclass_json
@dataclasses.dataclass
class SendEmailConfirmation200ApplicationJSON:
    status: Optional[SendEmailConfirmation200ApplicationJSONStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclasses.dataclass
class SendEmailConfirmationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    send_email_confirmation_200_application_json_object: Optional[SendEmailConfirmation200ApplicationJSON] = dataclasses.field(default=None)
    
