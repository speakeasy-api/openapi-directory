import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import node_add as shared_node_add


@dataclasses.dataclass
class CreateNodesQueryParams:
    node_parameters: Optional[list[shared_node_add.NodeAdd]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Node parameters', 'serialization': 'json' }})
    
class CreateNodes200ApplicationJSONActionEnum(str, Enum):
    CREATE_NODES = "createNodes"


@dataclass_json
@dataclasses.dataclass
class CreateNodes200ApplicationJSONData:
    created: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    failed: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('failed') }})
    
class CreateNodes200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class CreateNodes200ApplicationJSON:
    action: CreateNodes200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: CreateNodes200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: CreateNodes200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class CreateNodesRequest:
    query_params: CreateNodesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class CreateNodesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_nodes_200_application_json_object: Optional[CreateNodes200ApplicationJSON] = dataclasses.field(default=None)
    
