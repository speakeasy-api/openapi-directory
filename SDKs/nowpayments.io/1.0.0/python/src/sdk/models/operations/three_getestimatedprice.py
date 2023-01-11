import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class ThreeGetEstimatedPriceQueryParams:
    amount: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'amount', 'style': 'form', 'explode': True }})
    currency_from: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'currency_from', 'style': 'form', 'explode': True }})
    currency_to: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'currency_to', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class ThreeGetEstimatedPrice200ApplicationJSON:
    amount_from: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount_from') }})
    currency_from: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency_from') }})
    currency_to: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency_to') }})
    estimated_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('estimated_amount') }})
    

@dataclasses.dataclass
class ThreeGetEstimatedPriceRequest:
    query_params: ThreeGetEstimatedPriceQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ThreeGetEstimatedPriceResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    three_get_estimated_price_200_application_json_object: Optional[ThreeGetEstimatedPrice200ApplicationJSON] = dataclasses.field(default=None)
    
