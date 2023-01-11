import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetServerTypesIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class GetServerTypesID200ApplicationJSONServerTypeCPUTypeEnum(str, Enum):
    SHARED = "shared"
    DEDICATED = "dedicated"


@dataclass_json
@dataclasses.dataclass
class GetServerTypesID200ApplicationJSONServerTypePricesPriceHourly:
    r"""GetServerTypesID200ApplicationJSONServerTypePricesPriceHourly
    Hourly costs for a Server type in this Location
    """
    
    gross: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross') }})
    net: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    

@dataclass_json
@dataclasses.dataclass
class GetServerTypesID200ApplicationJSONServerTypePricesPriceMonthly:
    r"""GetServerTypesID200ApplicationJSONServerTypePricesPriceMonthly
    Monthly costs for a Server type in this Location
    """
    
    gross: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross') }})
    net: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    

@dataclass_json
@dataclasses.dataclass
class GetServerTypesID200ApplicationJSONServerTypePrices:
    location: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    price_hourly: GetServerTypesID200ApplicationJSONServerTypePricesPriceHourly = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_hourly') }})
    price_monthly: GetServerTypesID200ApplicationJSONServerTypePricesPriceMonthly = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_monthly') }})
    
class GetServerTypesID200ApplicationJSONServerTypeStorageTypeEnum(str, Enum):
    LOCAL = "local"
    NETWORK = "network"


@dataclass_json
@dataclasses.dataclass
class GetServerTypesID200ApplicationJSONServerType:
    cores: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cores') }})
    cpu_type: GetServerTypesID200ApplicationJSONServerTypeCPUTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpu_type') }})
    deprecated: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprecated') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    disk: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('disk') }})
    id: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    memory: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('memory') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    prices: list[GetServerTypesID200ApplicationJSONServerTypePrices] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prices') }})
    storage_type: GetServerTypesID200ApplicationJSONServerTypeStorageTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('storage_type') }})
    

@dataclass_json
@dataclasses.dataclass
class GetServerTypesID200ApplicationJSON:
    server_type: GetServerTypesID200ApplicationJSONServerType = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('server_type') }})
    

@dataclasses.dataclass
class GetServerTypesIDRequest:
    path_params: GetServerTypesIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetServerTypesIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_server_types_id_200_application_json_object: Optional[GetServerTypesID200ApplicationJSON] = dataclasses.field(default=None)
    
