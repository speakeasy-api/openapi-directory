import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetServerTypesQueryParams:
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    
class GetServerTypes200ApplicationJSONServerTypesCPUTypeEnum(str, Enum):
    SHARED = "shared"
    DEDICATED = "dedicated"


@dataclass_json
@dataclasses.dataclass
class GetServerTypes200ApplicationJSONServerTypesPricesPriceHourly:
    r"""GetServerTypes200ApplicationJSONServerTypesPricesPriceHourly
    Hourly costs for a Server type in this Location
    """
    
    gross: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross') }})
    net: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    

@dataclass_json
@dataclasses.dataclass
class GetServerTypes200ApplicationJSONServerTypesPricesPriceMonthly:
    r"""GetServerTypes200ApplicationJSONServerTypesPricesPriceMonthly
    Monthly costs for a Server type in this Location
    """
    
    gross: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross') }})
    net: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    

@dataclass_json
@dataclasses.dataclass
class GetServerTypes200ApplicationJSONServerTypesPrices:
    location: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    price_hourly: GetServerTypes200ApplicationJSONServerTypesPricesPriceHourly = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_hourly') }})
    price_monthly: GetServerTypes200ApplicationJSONServerTypesPricesPriceMonthly = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_monthly') }})
    
class GetServerTypes200ApplicationJSONServerTypesStorageTypeEnum(str, Enum):
    LOCAL = "local"
    NETWORK = "network"


@dataclass_json
@dataclasses.dataclass
class GetServerTypes200ApplicationJSONServerTypes:
    cores: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cores') }})
    cpu_type: GetServerTypes200ApplicationJSONServerTypesCPUTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpu_type') }})
    deprecated: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprecated') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    disk: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('disk') }})
    id: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    memory: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('memory') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    prices: list[GetServerTypes200ApplicationJSONServerTypesPrices] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prices') }})
    storage_type: GetServerTypes200ApplicationJSONServerTypesStorageTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('storage_type') }})
    

@dataclass_json
@dataclasses.dataclass
class GetServerTypes200ApplicationJSON:
    server_types: list[GetServerTypes200ApplicationJSONServerTypes] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('server_types') }})
    

@dataclasses.dataclass
class GetServerTypesRequest:
    query_params: GetServerTypesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetServerTypesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_server_types_200_application_json_object: Optional[GetServerTypes200ApplicationJSON] = dataclasses.field(default=None)
    
