import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class SixGetTheMinimumPaymentAmountQueryParams:
    currency_from: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'currency_from', 'style': 'form', 'explode': True }})
    currency_to: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'currency_to', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class SixGetTheMinimumPaymentAmount200ApplicationJSON:
    currency_from: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency_from') }})
    currency_to: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency_to') }})
    min_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('min_amount') }})
    

@dataclasses.dataclass
class SixGetTheMinimumPaymentAmountRequest:
    query_params: SixGetTheMinimumPaymentAmountQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SixGetTheMinimumPaymentAmountResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    six_get_the_minimum_payment_amount_200_application_json_object: Optional[SixGetTheMinimumPaymentAmount200ApplicationJSON] = dataclasses.field(default=None)
    
