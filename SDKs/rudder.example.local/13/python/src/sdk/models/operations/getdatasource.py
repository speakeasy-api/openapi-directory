import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datasource as shared_datasource


@dataclasses.dataclass
class GetDataSourcePathParams:
    datasource_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'datasourceId', 'style': 'simple', 'explode': False }})
    
class GetDataSource200ApplicationJSONActionEnum(str, Enum):
    GET_DATA_SOURCE = "getDataSource"


@dataclass_json
@dataclasses.dataclass
class GetDataSource200ApplicationJSONData:
    datasources: list[shared_datasource.Datasource] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasources') }})
    
class GetDataSource200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class GetDataSource200ApplicationJSON:
    action: GetDataSource200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: GetDataSource200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: GetDataSource200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class GetDataSourceRequest:
    path_params: GetDataSourcePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDataSourceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_data_source_200_application_json_object: Optional[GetDataSource200ApplicationJSON] = dataclasses.field(default=None)
    
