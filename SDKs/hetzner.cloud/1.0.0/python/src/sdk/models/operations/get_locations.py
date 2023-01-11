import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetLocationsQueryParams:
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetLocations200ApplicationJSONLocations:
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
class GetLocations200ApplicationJSON:
    locations: list[GetLocations200ApplicationJSONLocations] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('locations') }})
    

@dataclasses.dataclass
class GetLocationsRequest:
    query_params: GetLocationsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetLocationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_locations_200_application_json_object: Optional[GetLocations200ApplicationJSON] = dataclasses.field(default=None)
    
