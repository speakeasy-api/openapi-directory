import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2categoricalstatsconfig as shared_googleprivacydlpv2categoricalstatsconfig
from ..shared import googleprivacydlpv2deltapresenceestimationconfig as shared_googleprivacydlpv2deltapresenceestimationconfig
from ..shared import googleprivacydlpv2kanonymityconfig as shared_googleprivacydlpv2kanonymityconfig
from ..shared import googleprivacydlpv2kmapestimationconfig as shared_googleprivacydlpv2kmapestimationconfig
from ..shared import googleprivacydlpv2ldiversityconfig as shared_googleprivacydlpv2ldiversityconfig
from ..shared import googleprivacydlpv2numericalstatsconfig as shared_googleprivacydlpv2numericalstatsconfig


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2PrivacyMetric:
    r"""GooglePrivacyDlpV2PrivacyMetric
    Privacy metric to compute for reidentification risk analysis.
    """
    
    categorical_stats_config: Optional[shared_googleprivacydlpv2categoricalstatsconfig.GooglePrivacyDlpV2CategoricalStatsConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoricalStatsConfig') }})
    delta_presence_estimation_config: Optional[shared_googleprivacydlpv2deltapresenceestimationconfig.GooglePrivacyDlpV2DeltaPresenceEstimationConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deltaPresenceEstimationConfig') }})
    k_anonymity_config: Optional[shared_googleprivacydlpv2kanonymityconfig.GooglePrivacyDlpV2KAnonymityConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kAnonymityConfig') }})
    k_map_estimation_config: Optional[shared_googleprivacydlpv2kmapestimationconfig.GooglePrivacyDlpV2KMapEstimationConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kMapEstimationConfig') }})
    l_diversity_config: Optional[shared_googleprivacydlpv2ldiversityconfig.GooglePrivacyDlpV2LDiversityConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lDiversityConfig') }})
    numerical_stats_config: Optional[shared_googleprivacydlpv2numericalstatsconfig.GooglePrivacyDlpV2NumericalStatsConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numericalStatsConfig') }})
    
