import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetDatacentersQueryParams:
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetDatacenters200ApplicationJSONDatacentersLocation:
    city: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    country: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    latitude: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('latitude') }})
    longitude: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('longitude') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network_zone: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('network_zone') }})
    

@dataclass_json
@dataclasses.dataclass
class GetDatacenters200ApplicationJSONDatacentersServerTypes:
    r"""GetDatacenters200ApplicationJSONDatacentersServerTypes
    The Server types the Datacenter can handle
    """
    
    available: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('available') }})
    available_for_migration: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('available_for_migration') }})
    supported: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('supported') }})
    

@dataclass_json
@dataclasses.dataclass
class GetDatacenters200ApplicationJSONDatacenters:
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    location: GetDatacenters200ApplicationJSONDatacentersLocation = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    server_types: GetDatacenters200ApplicationJSONDatacentersServerTypes = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('server_types') }})
    

@dataclass_json
@dataclasses.dataclass
class GetDatacenters200ApplicationJSON:
    datacenters: list[GetDatacenters200ApplicationJSONDatacenters] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('datacenters') }})
    recommendation: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendation') }})
    

@dataclasses.dataclass
class GetDatacentersRequest:
    query_params: GetDatacentersQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDatacentersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_datacenters_200_application_json_object: Optional[GetDatacenters200ApplicationJSON] = dataclasses.field(default=None)
    
