import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class PostContactEnrichHeaders:
    galaxy_ap_name: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'galaxy-ap-name', 'style': 'simple', 'explode': False }})
    galaxy_ap_password: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'galaxy-ap-password', 'style': 'simple', 'explode': False }})
    galaxy_search_type: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'galaxy-search-type', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PostContactEnrichRequestBodyAddress:
    address_line1: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addressLine1') }})
    address_line2: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addressLine2') }})
    

@dataclass_json
@dataclasses.dataclass
class PostContactEnrichRequestBody:
    address: Optional[PostContactEnrichRequestBodyAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Address') }})
    age: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Age') }})
    dob: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Dob') }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Email') }})
    first_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirstName') }})
    last_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastName') }})
    middle_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MiddleName') }})
    phone_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PhoneNumber') }})
    

@dataclasses.dataclass
class PostContactEnrichRequest:
    headers: PostContactEnrichHeaders = dataclasses.field()
    request: Optional[PostContactEnrichRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostContactEnrichResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
