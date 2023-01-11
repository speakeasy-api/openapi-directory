import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import node_composition_enum as shared_node_composition_enum
from ..shared import node_query as shared_node_query
from ..shared import node_where as shared_node_where
from ..shared import node_full as shared_node_full


@dataclasses.dataclass
class ListPendingNodesQueryParams:
    composition: Optional[shared_node_composition_enum.NodeCompositionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'composition', 'style': 'form', 'explode': True }})
    include: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    query: Optional[shared_node_query.NodeQuery] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'serialization': 'json' }})
    select: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'select', 'style': 'form', 'explode': True }})
    where: Optional[list[shared_node_where.NodeWhere]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'where', 'serialization': 'json' }})
    
class ListPendingNodes200ApplicationJSONActionEnum(str, Enum):
    LIST_PENDING_NODES = "listPendingNodes"


@dataclass_json
@dataclasses.dataclass
class ListPendingNodes200ApplicationJSONData:
    r"""ListPendingNodes200ApplicationJSONData
    Information about the nodes
    """
    
    nodes: list[shared_node_full.NodeFull] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodes') }})
    
class ListPendingNodes200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class ListPendingNodes200ApplicationJSON:
    action: ListPendingNodes200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: ListPendingNodes200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: ListPendingNodes200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class ListPendingNodesRequest:
    query_params: ListPendingNodesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListPendingNodesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_pending_nodes_200_application_json_object: Optional[ListPendingNodes200ApplicationJSON] = dataclasses.field(default=None)
    
