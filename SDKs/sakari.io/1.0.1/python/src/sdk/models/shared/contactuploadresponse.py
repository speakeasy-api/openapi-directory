import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import contact as shared_contact


@dataclass_json
@dataclasses.dataclass
class ContactUploadResponseData:
    contacts: Optional[list[shared_contact.Contact]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contacts') }})
    errors: Optional[list[shared_contact.Contact]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    inserted: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inserted') }})
    submitted: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('submitted') }})
    success: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    updated: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated') }})
    

@dataclass_json
@dataclasses.dataclass
class ContactUploadResponse:
    data: Optional[ContactUploadResponseData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    success: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    
