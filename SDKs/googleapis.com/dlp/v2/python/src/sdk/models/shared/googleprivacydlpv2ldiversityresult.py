import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2ldiversityhistogrambucket as shared_googleprivacydlpv2ldiversityhistogrambucket


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2LDiversityResult:
    r"""GooglePrivacyDlpV2LDiversityResult
    Result of the l-diversity computation.
    """
    
    sensitive_value_frequency_histogram_buckets: Optional[list[shared_googleprivacydlpv2ldiversityhistogrambucket.GooglePrivacyDlpV2LDiversityHistogramBucket]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sensitiveValueFrequencyHistogramBuckets') }})
    
