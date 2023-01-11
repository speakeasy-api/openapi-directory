import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import name as shared_name
from ..shared import coordinate as shared_coordinate


@dataclass_json
@dataclasses.dataclass
class AirportNames:
    r"""AirportNames
    Container for airport names.
    """
    
    name: Optional[list[shared_name.Name]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    

@dataclass_json
@dataclasses.dataclass
class AirportPosition:
    r"""AirportPosition
    Physical location of an airport. This data section is optional and therefore not always present.
    """
    
    coordinate: Optional[shared_coordinate.Coordinate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Coordinate') }})
    

@dataclass_json
@dataclasses.dataclass
class Airport:
    r"""Airport
    Array of all available airports or one airport matching the request.
    """
    
    airport_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AirportCode') }})
    city_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CityCode') }})
    country_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CountryCode') }})
    location_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocationType') }})
    names: Optional[AirportNames] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Names') }})
    position: Optional[AirportPosition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Position') }})
    time_zone_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeZoneId') }})
    utc_offset: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UtcOffset') }})
    
