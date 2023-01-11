import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class CreateUsageChargePathParams:
    recurring_application_charge_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'recurringApplicationChargeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateUsageChargeHeaders:
    x_appstore_usage_charge_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Appstore-Usage-Charge-Token', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateUsageChargeRequestBodyUsageCharge:
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    point: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('point') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateUsageChargeRequestBody:
    usage_charge: Optional[CreateUsageChargeRequestBodyUsageCharge] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usage_charge') }})
    

@dataclasses.dataclass
class CreateUsageChargeSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class CreateUsageCharge201ApplicationJSONUsageCharge:
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    make_date: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('make_date') }})
    point: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('point') }})
    update_date: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('update_date') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateUsageCharge201ApplicationJSON:
    usage_charge: Optional[CreateUsageCharge201ApplicationJSONUsageCharge] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usage_charge') }})
    

@dataclasses.dataclass
class CreateUsageChargeRequest:
    headers: CreateUsageChargeHeaders = dataclasses.field()
    path_params: CreateUsageChargePathParams = dataclasses.field()
    request: CreateUsageChargeRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateUsageChargeSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateUsageChargeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_usage_charge_201_application_json_object: Optional[CreateUsageCharge201ApplicationJSON] = dataclasses.field(default=None)
    
