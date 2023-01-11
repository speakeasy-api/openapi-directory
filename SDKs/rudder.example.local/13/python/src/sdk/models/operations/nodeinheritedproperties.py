import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import node_inherited_properties as shared_node_inherited_properties


@dataclasses.dataclass
class NodeInheritedPropertiesPathParams:
    node_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'nodeId', 'style': 'simple', 'explode': False }})
    
class NodeInheritedProperties200ApplicationJSONActionEnum(str, Enum):
    NODE_INHERITED_PROPERTIES = "nodeInheritedProperties"

class NodeInheritedProperties200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class NodeInheritedProperties200ApplicationJSON:
    action: NodeInheritedProperties200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: list[shared_node_inherited_properties.NodeInheritedProperties] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: NodeInheritedProperties200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class NodeInheritedPropertiesRequest:
    path_params: NodeInheritedPropertiesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class NodeInheritedPropertiesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    node_inherited_properties_200_application_json_object: Optional[NodeInheritedProperties200ApplicationJSON] = dataclasses.field(default=None)
    
