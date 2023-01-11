import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import explicit as shared_explicit
from ..shared import exponential as shared_exponential
from ..shared import linear as shared_linear


@dataclass_json
@dataclasses.dataclass
class BucketOptions:
    r"""BucketOptions
    BucketOptions describes the bucket boundaries used to create a histogram for the distribution. The buckets can be in a linear sequence, an exponential sequence, or each bucket can be specified explicitly. BucketOptions does not include the number of values in each bucket.A bucket has an inclusive lower bound and exclusive upper bound for the values that are counted for that bucket. The upper bound of a bucket must be strictly greater than the lower bound. The sequence of N buckets for a distribution consists of an underflow bucket (number 0), zero or more finite buckets (number 1 through N - 2) and an overflow bucket (number N - 1). The buckets are contiguous: the lower bound of bucket i (i > 0) is the same as the upper bound of bucket i - 1. The buckets span the whole range of finite values: lower bound of the underflow bucket is -infinity and the upper bound of the overflow bucket is +infinity. The finite buckets are so-called because both bounds are finite.
    """
    
    explicit_buckets: Optional[shared_explicit.Explicit] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explicitBuckets') }})
    exponential_buckets: Optional[shared_exponential.Exponential] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exponentialBuckets') }})
    linear_buckets: Optional[shared_linear.Linear] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linearBuckets') }})
    
