import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class ReloadOneDatasourceAllNodesPathParams:
    datasource_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'datasourceId', 'style': 'simple', 'explode': False }})
    
class ReloadOneDatasourceAllNodes200ApplicationJSONActionEnum(str, Enum):
    RELOAD_ONE_DATASOURCE_ALL_NODES = "ReloadOneDatasourceAllNodes"

class ReloadOneDatasourceAllNodes200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class ReloadOneDatasourceAllNodes200ApplicationJSON:
    action: ReloadOneDatasourceAllNodes200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: ReloadOneDatasourceAllNodes200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class ReloadOneDatasourceAllNodesRequest:
    path_params: ReloadOneDatasourceAllNodesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReloadOneDatasourceAllNodesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    reload_one_datasource_all_nodes_200_application_json_object: Optional[ReloadOneDatasourceAllNodes200ApplicationJSON] = dataclasses.field(default=None)
    
