import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import usage as shared_usage


@dataclass_json
@dataclasses.dataclass
class StandardTierEgressWorkload:
    r"""StandardTierEgressWorkload
    Specify Standard Tier Internet egress networking.
    """
    
    egress_rate: Optional[shared_usage.Usage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('egressRate') }})
    source_region: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceRegion') }})
    
