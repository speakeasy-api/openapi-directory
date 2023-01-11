import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class NumericBucketingOption:
    r"""NumericBucketingOption
    Input only. Use this field to specify bucketing option for the histogram search response.
    """
    
    bucket_bounds: Optional[list[float]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketBounds') }})
    requires_min_max: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requiresMinMax') }})
    
