import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import node_full as shared_node_full
from ..shared import node_settings as shared_node_settings


@dataclasses.dataclass
class UpdateNodePathParams:
    node_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'nodeId', 'style': 'simple', 'explode': False }})
    
class UpdateNode200ApplicationJSONActionEnum(str, Enum):
    UPDATE_NODE = "updateNode"


@dataclass_json
@dataclasses.dataclass
class UpdateNode200ApplicationJSONData:
    r"""UpdateNode200ApplicationJSONData
    Information about the node
    """
    
    nodes: list[shared_node_full.NodeFull] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodes') }})
    
class UpdateNode200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class UpdateNode200ApplicationJSON:
    action: UpdateNode200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: UpdateNode200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: UpdateNode200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class UpdateNodeRequest:
    path_params: UpdateNodePathParams = dataclasses.field()
    request: Optional[shared_node_settings.NodeSettings] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNodeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_node_200_application_json_object: Optional[UpdateNode200ApplicationJSON] = dataclasses.field(default=None)
    
