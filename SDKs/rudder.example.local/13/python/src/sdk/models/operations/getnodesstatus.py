import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetNodesStatusQueryParams:
    ids: str = dataclasses.field(metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    
class GetNodesStatus200ApplicationJSONActionEnum(str, Enum):
    GET_NODES_STATUS = "getNodesStatus"

class GetNodesStatus200ApplicationJSONDataNodesStatusEnum(str, Enum):
    PENDING = "pending"
    ACCEPTED = "accepted"
    DELETED = "deleted"
    UNKNOWN = "unknown"


@dataclass_json
@dataclasses.dataclass
class GetNodesStatus200ApplicationJSONDataNodes:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    status: GetNodesStatus200ApplicationJSONDataNodesStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class GetNodesStatus200ApplicationJSONData:
    r"""GetNodesStatus200ApplicationJSONData
    List of nodeId and associated status
    """
    
    nodes: list[GetNodesStatus200ApplicationJSONDataNodes] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodes') }})
    
class GetNodesStatus200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class GetNodesStatus200ApplicationJSON:
    action: GetNodesStatus200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: GetNodesStatus200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: GetNodesStatus200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class GetNodesStatusRequest:
    query_params: GetNodesStatusQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNodesStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_nodes_status_200_application_json_object: Optional[GetNodesStatus200ApplicationJSON] = dataclasses.field(default=None)
    
