import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DatasourceRunParametersScheduleTypeEnum(str, Enum):
    SCHEDULED = "scheduled"
    NOTSCHEDULED = "notscheduled"


@dataclass_json
@dataclasses.dataclass
class DatasourceRunParametersSchedule:
    r"""DatasourceRunParametersSchedule
    Configure if data source should be fetch periodically
    """
    
    type: Optional[DatasourceRunParametersScheduleTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class DatasourceRunParameters:
    r"""DatasourceRunParameters
    Parameters to configure when the data source is fetched to update node properties.
    """
    
    on_generation: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onGeneration') }})
    on_new_node: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onNewNode') }})
    schedule: Optional[DatasourceRunParametersSchedule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule') }})
    
class DatasourceTypeNameEnum(str, Enum):
    HTTP = "HTTP"


@dataclass_json
@dataclasses.dataclass
class DatasourceTypeParametersHeaders:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
class DatasourceTypeParametersRequestMethodEnum(str, Enum):
    GET = "GET"
    POST = "POST"

class DatasourceTypeParametersRequestModeNameEnum(str, Enum):
    BY_NODE = "byNode"


@dataclass_json
@dataclasses.dataclass
class DatasourceTypeParametersRequestMode:
    r"""DatasourceTypeParametersRequestMode
    Configure the strategy used to query the HTTP data source.
    """
    
    name: Optional[DatasourceTypeParametersRequestModeNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class DatasourceTypeParameters:
    r"""DatasourceTypeParameters
    You can use Rudder variable expansion (`${rudder.node`, `${node.properties...}`)
    """
    
    check_ssl: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checkSsl') }})
    headers: Optional[list[DatasourceTypeParametersHeaders]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    request_method: Optional[DatasourceTypeParametersRequestMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestMethod') }})
    request_mode: Optional[DatasourceTypeParametersRequestMode] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestMode') }})
    request_timeout: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestTimeout') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class DatasourceType:
    r"""DatasourceType
    Define and configure data source type.
    """
    
    name: Optional[DatasourceTypeNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parameters: Optional[DatasourceTypeParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    

@dataclass_json
@dataclasses.dataclass
class Datasource:
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    run_parameters: Optional[DatasourceRunParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runParameters') }})
    type: Optional[DatasourceType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    update_timeout: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTimeout') }})
    
