import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import estimationtimepoint as shared_estimationtimepoint
from ..shared import rate as shared_rate


@dataclass_json
@dataclasses.dataclass
class Price:
    r"""Price
    The price of a SKU at a point int time.
    """
    
    effective_time: Optional[shared_estimationtimepoint.EstimationTimePoint] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectiveTime') }})
    price_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceType') }})
    rate: Optional[shared_rate.Rate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate') }})
    
