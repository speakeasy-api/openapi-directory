import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclass_json
@dataclasses.dataclass
class PostApplicationChargeRequestBodyApplicationCharge:
    application_charge_source_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('application_charge_source_id') }})
    

@dataclass_json
@dataclasses.dataclass
class PostApplicationChargeRequestBody:
    application_charge: Optional[PostApplicationChargeRequestBodyApplicationCharge] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('application_charge') }})
    

@dataclasses.dataclass
class PostApplicationChargeSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class PostApplicationCharge201ApplicationJSONApplicationCharge:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    make_date: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('make_date') }})
    point: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('point') }})
    update_date: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('update_date') }})
    

@dataclass_json
@dataclasses.dataclass
class PostApplicationCharge201ApplicationJSON:
    application_charge: Optional[PostApplicationCharge201ApplicationJSONApplicationCharge] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('application_charge') }})
    

@dataclasses.dataclass
class PostApplicationChargeRequest:
    request: PostApplicationChargeRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostApplicationChargeSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PostApplicationChargeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_application_charge_201_application_json_object: Optional[PostApplicationCharge201ApplicationJSON] = dataclasses.field(default=None)
    
