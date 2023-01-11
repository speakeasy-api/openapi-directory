import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import exemplar as shared_exemplar
from ..shared import explicitbuckets as shared_explicitbuckets
from ..shared import exponentialbuckets as shared_exponentialbuckets
from ..shared import linearbuckets as shared_linearbuckets


@dataclass_json
@dataclasses.dataclass
class Distribution:
    r"""Distribution
    Distribution represents a frequency distribution of double-valued sample points. It contains the size of the population of sample points plus additional optional information: * the arithmetic mean of the samples * the minimum and maximum of the samples * the sum-squared-deviation of the samples, used to compute variance * a histogram of the values of the sample points
    """
    
    bucket_counts: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketCounts') }})
    count: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    exemplars: Optional[list[shared_exemplar.Exemplar]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exemplars') }})
    explicit_buckets: Optional[shared_explicitbuckets.ExplicitBuckets] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explicitBuckets') }})
    exponential_buckets: Optional[shared_exponentialbuckets.ExponentialBuckets] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exponentialBuckets') }})
    linear_buckets: Optional[shared_linearbuckets.LinearBuckets] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linearBuckets') }})
    maximum: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximum') }})
    mean: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mean') }})
    minimum: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimum') }})
    sum_of_squared_deviation: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sumOfSquaredDeviation') }})
    
