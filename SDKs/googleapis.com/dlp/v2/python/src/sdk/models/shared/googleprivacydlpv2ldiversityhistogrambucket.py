import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2ldiversityequivalenceclass as shared_googleprivacydlpv2ldiversityequivalenceclass


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2LDiversityHistogramBucket:
    r"""GooglePrivacyDlpV2LDiversityHistogramBucket
    Histogram of l-diversity equivalence class sensitive value frequencies.
    """
    
    bucket_size: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketSize') }})
    bucket_value_count: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketValueCount') }})
    bucket_values: Optional[list[shared_googleprivacydlpv2ldiversityequivalenceclass.GooglePrivacyDlpV2LDiversityEquivalenceClass]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketValues') }})
    sensitive_value_frequency_lower_bound: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sensitiveValueFrequencyLowerBound') }})
    sensitive_value_frequency_upper_bound: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sensitiveValueFrequencyUpperBound') }})
    
