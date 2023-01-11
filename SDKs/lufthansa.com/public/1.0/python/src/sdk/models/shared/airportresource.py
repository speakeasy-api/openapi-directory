import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import airport as shared_airport
from ..shared import link as shared_link


@dataclass_json
@dataclasses.dataclass
class AirportResourceAirports:
    r"""AirportResourceAirports
    Container for airport elements.
    """
    
    airport: Optional[shared_airport.Airport] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Airport') }})
    

@dataclass_json
@dataclasses.dataclass
class AirportResourceMeta:
    r"""AirportResourceMeta
    Container for meta links.
    """
    
    at_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@Version') }})
    link: Optional[list[shared_link.Link]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Link') }})
    total_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalCount') }})
    

@dataclass_json
@dataclasses.dataclass
class AirportResource:
    r"""AirportResource
    Root element of airport response.
    """
    
    airports: Optional[AirportResourceAirports] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Airports') }})
    meta: Optional[AirportResourceMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Meta') }})
    
