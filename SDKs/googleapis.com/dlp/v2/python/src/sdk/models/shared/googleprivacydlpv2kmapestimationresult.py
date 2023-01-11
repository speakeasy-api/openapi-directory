import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2kmapestimationhistogrambucket as shared_googleprivacydlpv2kmapestimationhistogrambucket


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2KMapEstimationResult:
    r"""GooglePrivacyDlpV2KMapEstimationResult
    Result of the reidentifiability analysis. Note that these results are an estimation, not exact values.
    """
    
    k_map_estimation_histogram: Optional[list[shared_googleprivacydlpv2kmapestimationhistogrambucket.GooglePrivacyDlpV2KMapEstimationHistogramBucket]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kMapEstimationHistogram') }})
    
