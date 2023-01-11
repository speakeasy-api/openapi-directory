import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ExplicitBuckets:
    r"""ExplicitBuckets
    Describing buckets with arbitrary user-provided width.
    """
    
    bounds: Optional[list[float]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bounds') }})
    
