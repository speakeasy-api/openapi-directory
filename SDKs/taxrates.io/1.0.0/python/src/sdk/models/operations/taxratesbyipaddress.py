import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class TaxRatesByIPAddressQueryParams:
    domain: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'domain', 'style': 'form', 'explode': True }})
    filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    ip: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ip', 'style': 'form', 'explode': True }})
    product_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'product_code', 'style': 'form', 'explode': True }})
    zip: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'zip', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class TaxRatesByIPAddress200ApplicationJSONTaxes:
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Country') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    data_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data_name') }})
    data_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data_value') }})
    

@dataclass_json
@dataclasses.dataclass
class TaxRatesByIPAddress200ApplicationJSON:
    country_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country_name') }})
    taxes: Optional[list[TaxRatesByIPAddress200ApplicationJSONTaxes]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxes') }})
    

@dataclass_json
@dataclasses.dataclass
class TaxRatesByIPAddress500ApplicationJSON:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class TaxRatesByIPAddressRequest:
    query_params: TaxRatesByIPAddressQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class TaxRatesByIPAddressResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    tax_rates_by_ip_address_200_application_json_objects: Optional[list[TaxRatesByIPAddress200ApplicationJSON]] = dataclasses.field(default=None)
    tax_rates_by_ip_address_500_application_json_object: Optional[TaxRatesByIPAddress500ApplicationJSON] = dataclasses.field(default=None)
    
