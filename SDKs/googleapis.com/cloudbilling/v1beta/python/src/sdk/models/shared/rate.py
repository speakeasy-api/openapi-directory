import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ratetier as shared_ratetier


@dataclass_json
@dataclasses.dataclass
class Rate:
    r"""Rate
    A SKU price consisting of tiered rates.
    """
    
    tiers: Optional[list[shared_ratetier.RateTier]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tiers') }})
    unit: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    unit_count: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unitCount') }})
    
