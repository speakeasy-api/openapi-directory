import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ApplyPolicyAllNodes200ApplicationJSONActionEnum(str, Enum):
    APPLY_POLICY_ALL_NODES = "applyPolicyAllNodes"


@dataclass_json
@dataclasses.dataclass
class ApplyPolicyAllNodes200ApplicationJSONData:
    hostname: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostname') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    result: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    
class ApplyPolicyAllNodes200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class ApplyPolicyAllNodes200ApplicationJSON:
    action: ApplyPolicyAllNodes200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: list[ApplyPolicyAllNodes200ApplicationJSONData] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: ApplyPolicyAllNodes200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class ApplyPolicyAllNodesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    apply_policy_all_nodes_200_application_json_object: Optional[ApplyPolicyAllNodes200ApplicationJSON] = dataclasses.field(default=None)
    
