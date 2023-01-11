import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2deltapresenceestimationhistogrambucket as shared_googleprivacydlpv2deltapresenceestimationhistogrambucket


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2DeltaPresenceEstimationResult:
    r"""GooglePrivacyDlpV2DeltaPresenceEstimationResult
    Result of the δ-presence computation. Note that these results are an estimation, not exact values.
    """
    
    delta_presence_estimation_histogram: Optional[list[shared_googleprivacydlpv2deltapresenceestimationhistogrambucket.GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deltaPresenceEstimationHistogram') }})
    
