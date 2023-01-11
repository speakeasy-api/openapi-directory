import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ReloadAllDatasourcesAllNodes200ApplicationJSONActionEnum(str, Enum):
    RELOAD_ALL_DATASOURCES_ALL_NODES = "ReloadAllDatasourcesAllNodes"

class ReloadAllDatasourcesAllNodes200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class ReloadAllDatasourcesAllNodes200ApplicationJSON:
    action: ReloadAllDatasourcesAllNodes200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: ReloadAllDatasourcesAllNodes200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class ReloadAllDatasourcesAllNodesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    reload_all_datasources_all_nodes_200_application_json_object: Optional[ReloadAllDatasourcesAllNodes200ApplicationJSON] = dataclasses.field(default=None)
    
