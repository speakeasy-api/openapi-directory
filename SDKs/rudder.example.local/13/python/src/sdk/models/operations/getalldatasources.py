import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datasource as shared_datasource

class GetAllDataSources200ApplicationJSONActionEnum(str, Enum):
    GET_ALL_DATA_SOURCES = "getAllDataSources"


@dataclass_json
@dataclasses.dataclass
class GetAllDataSources200ApplicationJSONData:
    datasources: list[shared_datasource.Datasource] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasources') }})
    
class GetAllDataSources200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class GetAllDataSources200ApplicationJSON:
    action: GetAllDataSources200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: GetAllDataSources200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: GetAllDataSources200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class GetAllDataSourcesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_all_data_sources_200_application_json_object: Optional[GetAllDataSources200ApplicationJSON] = dataclasses.field(default=None)
    
