import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class InviteUserRequestMfaTypeEnum(str, Enum):
    SMS = "SMS"
    YUBIKEY = "YUBIKEY"
    TOTP = "TOTP"


@dataclass_json
@dataclasses.dataclass
class InviteUserRequest:
    email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    mfa_type: InviteUserRequestMfaTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mfaType') }})
    primary_contact_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryContactNumber') }})
    roles: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roles') }})
    sms_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('smsNumber') }})
    entity_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityId') }})
    first_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstName') }})
    last_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastName') }})
    secondary_contact_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondaryContactNumber') }})
    verification_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verificationCode') }})
    
