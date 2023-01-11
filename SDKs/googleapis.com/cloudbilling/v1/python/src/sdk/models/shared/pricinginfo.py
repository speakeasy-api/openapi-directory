import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import aggregationinfo as shared_aggregationinfo
from ..shared import pricingexpression as shared_pricingexpression


@dataclass_json
@dataclasses.dataclass
class PricingInfo:
    r"""PricingInfo
    Represents the pricing information for a SKU at a single point of time.
    """
    
    aggregation_info: Optional[shared_aggregationinfo.AggregationInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregationInfo') }})
    currency_conversion_rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyConversionRate') }})
    effective_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectiveTime') }})
    pricing_expression: Optional[shared_pricingexpression.PricingExpression] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pricingExpression') }})
    summary: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('summary') }})
    
