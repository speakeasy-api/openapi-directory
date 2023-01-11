import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class RegeneratePolicies200ApplicationJSONActionEnum(str, Enum):
    REGENERATE_POLICIES = "regeneratePolicies"

class RegeneratePolicies200ApplicationJSONDataPoliciesEnum(str, Enum):
    STARTED = "Started"


@dataclass_json
@dataclasses.dataclass
class RegeneratePolicies200ApplicationJSONData:
    policies: RegeneratePolicies200ApplicationJSONDataPoliciesEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('policies') }})
    
class RegeneratePolicies200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class RegeneratePolicies200ApplicationJSON:
    action: RegeneratePolicies200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: RegeneratePolicies200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: RegeneratePolicies200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class RegeneratePoliciesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    regenerate_policies_200_application_json_object: Optional[RegeneratePolicies200ApplicationJSON] = dataclasses.field(default=None)
    
