import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class TokenErrorAccountStatusEnum(str, Enum):
    REGISTERED = "registered"
    EMAIL_CONFIRMED = "email_confirmed"
    DELETED = "deleted"
    SUSPENDED = "suspended"
    REJECTED = "rejected"
    APPROVED = "approved"
    RESUME = "resume"
    WEBINAR = "webinar"
    COURSE = "course"


@dataclass_json
@dataclasses.dataclass
class TokenError:
    account_status: Optional[TokenErrorAccountStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_status') }})
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    help: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('help') }})
    http_code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http_code') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    
