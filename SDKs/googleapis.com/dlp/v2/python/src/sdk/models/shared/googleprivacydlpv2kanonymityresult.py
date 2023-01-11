import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2kanonymityhistogrambucket as shared_googleprivacydlpv2kanonymityhistogrambucket


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2KAnonymityResult:
    r"""GooglePrivacyDlpV2KAnonymityResult
    Result of the k-anonymity computation.
    """
    
    equivalence_class_histogram_buckets: Optional[list[shared_googleprivacydlpv2kanonymityhistogrambucket.GooglePrivacyDlpV2KAnonymityHistogramBucket]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('equivalenceClassHistogramBuckets') }})
    
