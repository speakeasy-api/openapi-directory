import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import geocoords as shared_geocoords


@dataclass_json
@dataclasses.dataclass
class SpotUpdateAntennaReportLocationsInput:
    antenna_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('antenna_number') }})
    

@dataclass_json
@dataclasses.dataclass
class SpotUpdateInput:
    antenna_report_locations: Optional[list[SpotUpdateAntennaReportLocationsInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('antenna_report_locations') }})
    config_request: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config_request') }})
    geo_coords: Optional[shared_geocoords.GeoCoordsInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geo_coords') }})
    report_location: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('report_location') }})
    senses_request: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('senses_request') }})
    
