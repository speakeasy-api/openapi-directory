import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class RetrievePricingCountryPathParams:
    type: str = dataclasses.field(metadata={'path_param': { 'field_name': 'type', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RetrievePricingCountryQueryParams:
    api_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    api_secret: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api_secret', 'style': 'form', 'explode': True }})
    country: str = dataclasses.field(metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class RetrievePricingCountry400ApplicationJSONInvalidParameters:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    parameter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameter') }})
    

@dataclass_json
@dataclasses.dataclass
class RetrievePricingCountry400ApplicationJSON:
    error_title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_title') }})
    invalid_parameters: RetrievePricingCountry400ApplicationJSONInvalidParameters = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('invalid_parameters') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class RetrievePricingCountry401ApplicationJSON:
    code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    currency: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    error_code_label: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error-code-label') }})
    

@dataclasses.dataclass
class RetrievePricingCountryRequest:
    path_params: RetrievePricingCountryPathParams = dataclasses.field()
    query_params: RetrievePricingCountryQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class RetrievePricingCountryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    pricing_country_response: Optional[Any] = dataclasses.field(default=None)
    retrieve_pricing_country_400_application_json_object: Optional[RetrievePricingCountry400ApplicationJSON] = dataclasses.field(default=None)
    retrieve_pricing_country_401_application_json_object: Optional[RetrievePricingCountry401ApplicationJSON] = dataclasses.field(default=None)
    
