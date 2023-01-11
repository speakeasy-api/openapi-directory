import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetcitystandardQueryParams:
    city: str = dataclasses.field(metadata={'query_param': { 'field_name': 'city', 'style': 'form', 'explode': True }})
    license: str = dataclasses.field(metadata={'query_param': { 'field_name': 'license', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class Getcitystandard200ApplicationJSON:
    city_standard: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CityStandard') }})
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    credits: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Credits') }})
    

@dataclasses.dataclass
class GetcitystandardRequest:
    query_params: GetcitystandardQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetcitystandardResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    getcitystandard_200_application_json_object: Optional[Getcitystandard200ApplicationJSON] = dataclasses.field(default=None)
    
