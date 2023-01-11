import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import four_hundred_and_oneresponse as shared_four_hundred_and_oneresponse
from ..shared import four_hundred_and_threeresponse as shared_four_hundred_and_threeresponse


@dataclasses.dataclass
class UpdateMessengerAccountPathParams:
    external_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'external_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateMessengerAccountRequestBody:
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('access_token') }})
    applications: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applications') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclasses.dataclass
class UpdateMessengerAccountSecurity:
    basic_auth: Optional[shared_security.SchemeBasicAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    bearer_auth: Optional[shared_security.SchemeBearerAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateMessengerAccount200ApplicationJSON:
    access_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('access_token') }})
    api_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('api_key') }})
    external_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_id') }})
    provider: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('provider') }})
    applications: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applications') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateMessengerAccount400ApplicationJSONInvalidParams:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateMessengerAccount400ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    instance: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    invalid_params: Optional[list[UpdateMessengerAccount400ApplicationJSONInvalidParams]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invalid_params') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclasses.dataclass
class UpdateMessengerAccountRequest:
    path_params: UpdateMessengerAccountPathParams = dataclasses.field()
    request: UpdateMessengerAccountRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateMessengerAccountSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UpdateMessengerAccountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    four_hundred_and_one_response: Optional[shared_four_hundred_and_oneresponse.FourHundredAndOneResponse] = dataclasses.field(default=None)
    four_hundred_and_three_response: Optional[shared_four_hundred_and_threeresponse.FourHundredAndThreeResponse] = dataclasses.field(default=None)
    update_messenger_account_200_application_json_object: Optional[UpdateMessengerAccount200ApplicationJSON] = dataclasses.field(default=None)
    update_messenger_account_400_application_json_object: Optional[UpdateMessengerAccount400ApplicationJSON] = dataclasses.field(default=None)
    
