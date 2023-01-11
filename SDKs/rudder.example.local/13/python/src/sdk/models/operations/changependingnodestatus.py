import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import node_full as shared_node_full


@dataclasses.dataclass
class ChangePendingNodeStatusPathParams:
    node_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'nodeId', 'style': 'simple', 'explode': False }})
    
class ChangePendingNodeStatusRequestBodyStatusEnum(str, Enum):
    ACCEPTED = "accepted"
    REFUSED = "refused"


@dataclass_json
@dataclasses.dataclass
class ChangePendingNodeStatusRequestBody:
    status: Optional[ChangePendingNodeStatusRequestBodyStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
class ChangePendingNodeStatus200ApplicationJSONActionEnum(str, Enum):
    CHANGE_PENDING_NODE_STATUS = "changePendingNodeStatus"


@dataclass_json
@dataclasses.dataclass
class ChangePendingNodeStatus200ApplicationJSONData:
    r"""ChangePendingNodeStatus200ApplicationJSONData
    Information about the node
    """
    
    nodes: list[shared_node_full.NodeFull] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodes') }})
    
class ChangePendingNodeStatus200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class ChangePendingNodeStatus200ApplicationJSON:
    action: ChangePendingNodeStatus200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: ChangePendingNodeStatus200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: ChangePendingNodeStatus200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class ChangePendingNodeStatusRequest:
    path_params: ChangePendingNodeStatusPathParams = dataclasses.field()
    request: Optional[ChangePendingNodeStatusRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ChangePendingNodeStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    change_pending_node_status_200_application_json_object: Optional[ChangePendingNodeStatus200ApplicationJSON] = dataclasses.field(default=None)
    
