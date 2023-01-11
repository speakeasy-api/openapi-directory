import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetweatherQueryParams:
    city: str = dataclasses.field(metadata={'query_param': { 'field_name': 'city', 'style': 'form', 'explode': True }})
    license: str = dataclasses.field(metadata={'query_param': { 'field_name': 'license', 'style': 'form', 'explode': True }})
    state: str = dataclasses.field(metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class Getweather200ApplicationJSON:
    city: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('City') }})
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    credits: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Credits') }})
    relative_humidity: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RelativeHumidity') }})
    state: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    temp_c: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TempC') }})
    temp_f: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TempF') }})
    visibility_miles: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VisibilityMiles') }})
    weather: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Weather') }})
    wind_dir: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WindDir') }})
    wind_mph: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WindMPH') }})
    

@dataclasses.dataclass
class GetweatherRequest:
    query_params: GetweatherQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetweatherResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    getweather_200_application_json_object: Optional[Getweather200ApplicationJSON] = dataclasses.field(default=None)
    
