import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetcurrencyrateQueryParams:
    license: str = dataclasses.field(metadata={'query_param': { 'field_name': 'license', 'style': 'form', 'explode': True }})
    symbol: str = dataclasses.field(metadata={'query_param': { 'field_name': 'symbol', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class Getcurrencyrate200ApplicationJSON:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Country') }})
    credits: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Credits') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    rate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Rate') }})
    symbol: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Symbol') }})
    

@dataclasses.dataclass
class GetcurrencyrateRequest:
    query_params: GetcurrencyrateQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetcurrencyrateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    getcurrencyrate_200_application_json_object: Optional[Getcurrencyrate200ApplicationJSON] = dataclasses.field(default=None)
    
