import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import currency_enum as shared_currency_enum


@dataclass_json
@dataclasses.dataclass
class GetRateByIDResponseBodyMonetaryValue:
    r"""GetRateByIDResponseBodyMonetaryValue
    A monetary value, such as the price of a shipping label, the insured value of a package, or an account balance.
    
    """
    
    amount: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    currency: shared_currency_enum.CurrencyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRateByIDResponseBody:
    r"""GetRateByIDResponseBody
    A rate
    """
    
    carrier_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrier_code') }})
    carrier_friendly_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrier_friendly_name') }})
    carrier_id: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrier_id') }})
    carrier_nickname: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrier_nickname') }})
    confirmation_amount: GetRateByIDResponseBodyMonetaryValue = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('confirmation_amount') }})
    error_messages: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_messages') }})
    guaranteed_service: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('guaranteed_service') }})
    insurance_amount: GetRateByIDResponseBodyMonetaryValue = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('insurance_amount') }})
    negotiated_rate: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('negotiated_rate') }})
    other_amount: GetRateByIDResponseBodyMonetaryValue = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('other_amount') }})
    package_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('package_type') }})
    rate_id: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate_id') }})
    rate_type: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate_type') }})
    service_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_code') }})
    service_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_type') }})
    shipping_amount: GetRateByIDResponseBodyMonetaryValue = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipping_amount') }})
    trackable: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackable') }})
    validation_status: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('validation_status') }})
    warning_messages: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('warning_messages') }})
    zone: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('zone') }})
    carrier_delivery_days: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrier_delivery_days') }})
    delivery_days: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delivery_days') }})
    estimated_delivery_date: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('estimated_delivery_date') }})
    ship_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ship_date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tax_amount: Optional[GetRateByIDResponseBodyMonetaryValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tax_amount') }})
    
