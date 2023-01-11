import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class ConvertcurrencyQueryParams:
    amount: str = dataclasses.field(metadata={'query_param': { 'field_name': 'amount', 'style': 'form', 'explode': True }})
    from_: str = dataclasses.field(metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    license: str = dataclasses.field(metadata={'query_param': { 'field_name': 'license', 'style': 'form', 'explode': True }})
    to: str = dataclasses.field(metadata={'query_param': { 'field_name': 'to', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class Convertcurrency200ApplicationJSON:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    converted: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Converted') }})
    credits: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Credits') }})
    currency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Currency') }})
    

@dataclasses.dataclass
class ConvertcurrencyRequest:
    query_params: ConvertcurrencyQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ConvertcurrencyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    convertcurrency_200_application_json_object: Optional[Convertcurrency200ApplicationJSON] = dataclasses.field(default=None)
    
