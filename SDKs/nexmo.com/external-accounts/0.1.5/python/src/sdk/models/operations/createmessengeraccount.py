import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import four_hundred_and_oneresponse as shared_four_hundred_and_oneresponse
from ..shared import four_hundred_and_threeresponse as shared_four_hundred_and_threeresponse
from ..shared import messengeraccountresponse as shared_messengeraccountresponse


@dataclass_json
@dataclasses.dataclass
class CreateMessengerAccountRequestBody:
    access_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('access_token') }})
    external_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_id') }})
    applications: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applications') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclasses.dataclass
class CreateMessengerAccountSecurity:
    basic_auth: Optional[shared_security.SchemeBasicAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    bearer_auth: Optional[shared_security.SchemeBearerAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclasses.dataclass
class CreateMessengerAccount400ApplicationJSONInvalidParams:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateMessengerAccount400ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    instance: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    invalid_params: Optional[list[CreateMessengerAccount400ApplicationJSONInvalidParams]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invalid_params') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclasses.dataclass
class CreateMessengerAccountRequest:
    request: CreateMessengerAccountRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateMessengerAccountSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateMessengerAccountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    four_hundred_and_one_response: Optional[shared_four_hundred_and_oneresponse.FourHundredAndOneResponse] = dataclasses.field(default=None)
    four_hundred_and_three_response: Optional[shared_four_hundred_and_threeresponse.FourHundredAndThreeResponse] = dataclasses.field(default=None)
    create_messenger_account_400_application_json_object: Optional[CreateMessengerAccount400ApplicationJSON] = dataclasses.field(default=None)
    messenger_account_response: Optional[shared_messengeraccountresponse.MessengerAccountResponse] = dataclasses.field(default=None)
    
