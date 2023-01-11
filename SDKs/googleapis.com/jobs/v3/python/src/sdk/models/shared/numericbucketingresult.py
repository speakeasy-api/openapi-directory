import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import bucketizedcount as shared_bucketizedcount


@dataclass_json
@dataclasses.dataclass
class NumericBucketingResult:
    r"""NumericBucketingResult
    Output only. Custom numeric bucketing result.
    """
    
    counts: Optional[list[shared_bucketizedcount.BucketizedCount]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('counts') }})
    max_value: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxValue') }})
    min_value: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minValue') }})
    
