import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetweatherzipcodeQueryParams:
    license: str = dataclasses.field(metadata={'query_param': { 'field_name': 'license', 'style': 'form', 'explode': True }})
    zip: str = dataclasses.field(metadata={'query_param': { 'field_name': 'zip', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class Getweatherzipcode200ApplicationJSON:
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
class GetweatherzipcodeRequest:
    query_params: GetweatherzipcodeQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetweatherzipcodeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    getweatherzipcode_200_application_json_object: Optional[Getweatherzipcode200ApplicationJSON] = dataclasses.field(default=None)
    
