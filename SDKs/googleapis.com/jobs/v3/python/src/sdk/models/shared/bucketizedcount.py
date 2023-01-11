import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import bucketrange as shared_bucketrange


@dataclass_json
@dataclasses.dataclass
class BucketizedCount:
    r"""BucketizedCount
    Represents count of jobs within one bucket.
    """
    
    count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    range: Optional[shared_bucketrange.BucketRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    
