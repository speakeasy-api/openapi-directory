import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import node_full as shared_node_full


@dataclasses.dataclass
class NodeDetailsPathParams:
    node_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'nodeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class NodeDetailsQueryParams:
    include: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    
class NodeDetails200ApplicationJSONActionEnum(str, Enum):
    NODE_DETAILS = "nodeDetails"


@dataclass_json
@dataclasses.dataclass
class NodeDetails200ApplicationJSONData:
    r"""NodeDetails200ApplicationJSONData
    Information about the node
    """
    
    nodes: list[shared_node_full.NodeFull] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodes') }})
    
class NodeDetails200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class NodeDetails200ApplicationJSON:
    action: NodeDetails200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: NodeDetails200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: NodeDetails200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class NodeDetailsRequest:
    path_params: NodeDetailsPathParams = dataclasses.field()
    query_params: NodeDetailsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class NodeDetailsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    node_details_200_application_json_object: Optional[NodeDetails200ApplicationJSON] = dataclasses.field(default=None)
    
