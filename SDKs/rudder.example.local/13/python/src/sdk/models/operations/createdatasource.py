import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datasource as shared_datasource

class CreateDataSource200ApplicationJSONActionEnum(str, Enum):
    CREATE_DATA_SOURCE = "createDataSource"


@dataclass_json
@dataclasses.dataclass
class CreateDataSource200ApplicationJSONData:
    r"""CreateDataSource200ApplicationJSONData
    Information about the data sources
    """
    
    datasources: list[shared_datasource.Datasource] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasources') }})
    
class CreateDataSource200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class CreateDataSource200ApplicationJSON:
    action: CreateDataSource200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: CreateDataSource200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: CreateDataSource200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class CreateDataSourceRequest:
    request: Optional[shared_datasource.Datasource] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateDataSourceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_data_source_200_application_json_object: Optional[CreateDataSource200ApplicationJSON] = dataclasses.field(default=None)
    
