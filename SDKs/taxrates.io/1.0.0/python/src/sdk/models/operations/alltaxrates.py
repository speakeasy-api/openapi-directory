import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class AllTaxRatesQueryParams:
    product_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Product_code', 'style': 'form', 'explode': True }})
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    domain: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'domain', 'style': 'form', 'explode': True }})
    filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class AllTaxRates200ApplicationJSONRates:
    data_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data_name') }})
    data_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data_value') }})
    product_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product_code') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class AllTaxRates200ApplicationJSON:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    rates: Optional[list[AllTaxRates200ApplicationJSONRates]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rates') }})
    state: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    zip: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zip') }})
    

@dataclass_json
@dataclasses.dataclass
class AllTaxRates500ApplicationJSON:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class AllTaxRatesRequest:
    query_params: AllTaxRatesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class AllTaxRatesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    all_tax_rates_200_application_json_objects: Optional[list[AllTaxRates200ApplicationJSON]] = dataclasses.field(default=None)
    all_tax_rates_500_application_json_object: Optional[AllTaxRates500ApplicationJSON] = dataclasses.field(default=None)
    
