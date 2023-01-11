import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datasource as shared_datasource


@dataclasses.dataclass
class UpdateDataSourcePathParams:
    datasource_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'datasourceId', 'style': 'simple', 'explode': False }})
    
class UpdateDataSource200ApplicationJSONActionEnum(str, Enum):
    UPDATE_DATA_SOURCE = "updateDataSource"


@dataclass_json
@dataclasses.dataclass
class UpdateDataSource200ApplicationJSONData:
    datasources: list[shared_datasource.Datasource] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasources') }})
    
class UpdateDataSource200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class UpdateDataSource200ApplicationJSON:
    action: UpdateDataSource200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: UpdateDataSource200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: UpdateDataSource200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class UpdateDataSourceRequest:
    path_params: UpdateDataSourcePathParams = dataclasses.field()
    request: Optional[shared_datasource.Datasource] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateDataSourceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_data_source_200_application_json_object: Optional[UpdateDataSource200ApplicationJSON] = dataclasses.field(default=None)
    
