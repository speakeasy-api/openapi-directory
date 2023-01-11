import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datasource as shared_datasource


@dataclasses.dataclass
class DeleteDataSourcePathParams:
    datasource_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'datasourceId', 'style': 'simple', 'explode': False }})
    
class DeleteDataSource200ApplicationJSONActionEnum(str, Enum):
    DELETE_DATA_SOURCE = "deleteDataSource"


@dataclass_json
@dataclasses.dataclass
class DeleteDataSource200ApplicationJSONData:
    datasources: list[shared_datasource.Datasource] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasources') }})
    
class DeleteDataSource200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class DeleteDataSource200ApplicationJSON:
    action: DeleteDataSource200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: DeleteDataSource200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: DeleteDataSource200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class DeleteDataSourceRequest:
    path_params: DeleteDataSourcePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteDataSourceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_data_source_200_application_json_object: Optional[DeleteDataSource200ApplicationJSON] = dataclasses.field(default=None)
    
