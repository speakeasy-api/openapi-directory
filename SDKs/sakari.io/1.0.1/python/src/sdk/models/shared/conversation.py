import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import contactidentifiers as shared_contactidentifiers
from ..shared import updated as shared_updated
from ..shared import message as shared_message
from ..shared import phonenumber as shared_phonenumber


@dataclass_json
@dataclasses.dataclass
class Conversation:
    closed: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('closed') }})
    contact: Optional[shared_contactidentifiers.ContactIdentifiers] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contact') }})
    created: Optional[shared_updated.Updated] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_message: Optional[shared_message.Message] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastMessage') }})
    phone_number: Optional[shared_phonenumber.PhoneNumber] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumber') }})
    unread: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unread') }})
    updated: Optional[shared_updated.Updated] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated') }})
    
