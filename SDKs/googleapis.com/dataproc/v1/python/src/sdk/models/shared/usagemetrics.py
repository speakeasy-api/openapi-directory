import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class UsageMetrics:
    r"""UsageMetrics
    Usage metrics represent approximate total resources consumed by a workload.
    """
    
    milli_dcu_seconds: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('milliDcuSeconds') }})
    shuffle_storage_gb_seconds: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shuffleStorageGbSeconds') }})
    
