import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2categoricalstatshistogrambucket as shared_googleprivacydlpv2categoricalstatshistogrambucket


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2CategoricalStatsResult:
    r"""GooglePrivacyDlpV2CategoricalStatsResult
    Result of the categorical stats computation.
    """
    
    value_frequency_histogram_buckets: Optional[list[shared_googleprivacydlpv2categoricalstatshistogrambucket.GooglePrivacyDlpV2CategoricalStatsHistogramBucket]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueFrequencyHistogramBuckets') }})
    
