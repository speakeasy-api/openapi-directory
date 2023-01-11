import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class ReloadAllDatasourcesOneNodePathParams:
    node_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'nodeId', 'style': 'simple', 'explode': False }})
    
class ReloadAllDatasourcesOneNode200ApplicationJSONActionEnum(str, Enum):
    RELOAD_ALL_DATASOURCES_ONE_NODE = "ReloadAllDatasourcesOneNode"

class ReloadAllDatasourcesOneNode200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class ReloadAllDatasourcesOneNode200ApplicationJSON:
    action: ReloadAllDatasourcesOneNode200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: ReloadAllDatasourcesOneNode200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class ReloadAllDatasourcesOneNodeRequest:
    path_params: ReloadAllDatasourcesOneNodePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReloadAllDatasourcesOneNodeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    reload_all_datasources_one_node_200_application_json_object: Optional[ReloadAllDatasourcesOneNode200ApplicationJSON] = dataclasses.field(default=None)
    
