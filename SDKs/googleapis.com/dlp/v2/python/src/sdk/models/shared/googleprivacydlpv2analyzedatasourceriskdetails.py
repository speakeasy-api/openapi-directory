import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2categoricalstatsresult as shared_googleprivacydlpv2categoricalstatsresult
from ..shared import googleprivacydlpv2deltapresenceestimationresult as shared_googleprivacydlpv2deltapresenceestimationresult
from ..shared import googleprivacydlpv2kanonymityresult as shared_googleprivacydlpv2kanonymityresult
from ..shared import googleprivacydlpv2kmapestimationresult as shared_googleprivacydlpv2kmapestimationresult
from ..shared import googleprivacydlpv2ldiversityresult as shared_googleprivacydlpv2ldiversityresult
from ..shared import googleprivacydlpv2numericalstatsresult as shared_googleprivacydlpv2numericalstatsresult
from ..shared import googleprivacydlpv2requestedriskanalysisoptions as shared_googleprivacydlpv2requestedriskanalysisoptions
from ..shared import googleprivacydlpv2privacymetric as shared_googleprivacydlpv2privacymetric
from ..shared import googleprivacydlpv2bigquerytable as shared_googleprivacydlpv2bigquerytable


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails:
    r"""GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails
    Result of a risk analysis operation request.
    """
    
    categorical_stats_result: Optional[shared_googleprivacydlpv2categoricalstatsresult.GooglePrivacyDlpV2CategoricalStatsResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoricalStatsResult') }})
    delta_presence_estimation_result: Optional[shared_googleprivacydlpv2deltapresenceestimationresult.GooglePrivacyDlpV2DeltaPresenceEstimationResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deltaPresenceEstimationResult') }})
    k_anonymity_result: Optional[shared_googleprivacydlpv2kanonymityresult.GooglePrivacyDlpV2KAnonymityResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kAnonymityResult') }})
    k_map_estimation_result: Optional[shared_googleprivacydlpv2kmapestimationresult.GooglePrivacyDlpV2KMapEstimationResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kMapEstimationResult') }})
    l_diversity_result: Optional[shared_googleprivacydlpv2ldiversityresult.GooglePrivacyDlpV2LDiversityResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lDiversityResult') }})
    numerical_stats_result: Optional[shared_googleprivacydlpv2numericalstatsresult.GooglePrivacyDlpV2NumericalStatsResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numericalStatsResult') }})
    requested_options: Optional[shared_googleprivacydlpv2requestedriskanalysisoptions.GooglePrivacyDlpV2RequestedRiskAnalysisOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedOptions') }})
    requested_privacy_metric: Optional[shared_googleprivacydlpv2privacymetric.GooglePrivacyDlpV2PrivacyMetric] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedPrivacyMetric') }})
    requested_source_table: Optional[shared_googleprivacydlpv2bigquerytable.GooglePrivacyDlpV2BigQueryTable] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedSourceTable') }})
    
