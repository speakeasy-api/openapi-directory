import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class RetrievePrefixPricingPathParams:
    type: str = dataclasses.field(metadata={'path_param': { 'field_name': 'type', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RetrievePrefixPricingQueryParams:
    api_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    api_secret: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api_secret', 'style': 'form', 'explode': True }})
    prefix: str = dataclasses.field(metadata={'query_param': { 'field_name': 'prefix', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class RetrievePrefixPricing400ApplicationJSONInvalidParameters:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    parameter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameter') }})
    

@dataclass_json
@dataclasses.dataclass
class RetrievePrefixPricing400ApplicationJSON:
    error_title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_title') }})
    invalid_parameters: RetrievePrefixPricing400ApplicationJSONInvalidParameters = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('invalid_parameters') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class RetrievePrefixPricing401ApplicationJSON:
    code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    currency: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    error_code_label: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error-code-label') }})
    

@dataclasses.dataclass
class RetrievePrefixPricingRequest:
    path_params: RetrievePrefixPricingPathParams = dataclasses.field()
    query_params: RetrievePrefixPricingQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class RetrievePrefixPricingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    pricing_countries_response: Optional[Any] = dataclasses.field(default=None)
    retrieve_prefix_pricing_400_application_json_object: Optional[RetrievePrefixPricing400ApplicationJSON] = dataclasses.field(default=None)
    retrieve_prefix_pricing_401_application_json_object: Optional[RetrievePrefixPricing401ApplicationJSON] = dataclasses.field(default=None)
    
