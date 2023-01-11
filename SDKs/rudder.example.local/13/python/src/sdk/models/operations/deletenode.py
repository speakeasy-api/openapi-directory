import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import node_delete_mode_enum as shared_node_delete_mode_enum
from ..shared import node_full as shared_node_full


@dataclasses.dataclass
class DeleteNodePathParams:
    node_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'nodeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteNodeQueryParams:
    mode: Optional[shared_node_delete_mode_enum.NodeDeleteModeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'mode', 'style': 'form', 'explode': True }})
    
class DeleteNode200ApplicationJSONActionEnum(str, Enum):
    DELETE_NODE = "deleteNode"


@dataclass_json
@dataclasses.dataclass
class DeleteNode200ApplicationJSONData:
    r"""DeleteNode200ApplicationJSONData
    Information about the node
    """
    
    nodes: list[shared_node_full.NodeFull] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodes') }})
    
class DeleteNode200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class DeleteNode200ApplicationJSON:
    action: DeleteNode200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: DeleteNode200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: DeleteNode200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class DeleteNodeRequest:
    path_params: DeleteNodePathParams = dataclasses.field()
    query_params: DeleteNodeQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteNodeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_node_200_application_json_object: Optional[DeleteNode200ApplicationJSON] = dataclasses.field(default=None)
    
