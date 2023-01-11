import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class UpdatePolicies200ApplicationJSONActionEnum(str, Enum):
    UPDATE_POLICIES = "updatePolicies"

class UpdatePolicies200ApplicationJSONDataPoliciesEnum(str, Enum):
    STARTED = "Started"


@dataclass_json
@dataclasses.dataclass
class UpdatePolicies200ApplicationJSONData:
    policies: UpdatePolicies200ApplicationJSONDataPoliciesEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('policies') }})
    
class UpdatePolicies200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class UpdatePolicies200ApplicationJSON:
    action: UpdatePolicies200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: UpdatePolicies200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: UpdatePolicies200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class UpdatePoliciesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_policies_200_application_json_object: Optional[UpdatePolicies200ApplicationJSON] = dataclasses.field(default=None)
    
