import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetcountrystandardQueryParams:
    country: str = dataclasses.field(metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    license: str = dataclasses.field(metadata={'query_param': { 'field_name': 'license', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class Getcountrystandard200ApplicationJSON:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    country_standard: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CountryStandard') }})
    credits: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Credits') }})
    

@dataclasses.dataclass
class GetcountrystandardRequest:
    query_params: GetcountrystandardQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetcountrystandardResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    getcountrystandard_200_application_json_object: Optional[Getcountrystandard200ApplicationJSON] = dataclasses.field(default=None)
    
