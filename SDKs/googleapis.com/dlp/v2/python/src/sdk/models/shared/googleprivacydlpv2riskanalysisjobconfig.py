import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2action as shared_googleprivacydlpv2action
from ..shared import googleprivacydlpv2privacymetric as shared_googleprivacydlpv2privacymetric
from ..shared import googleprivacydlpv2bigquerytable as shared_googleprivacydlpv2bigquerytable


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2RiskAnalysisJobConfig:
    r"""GooglePrivacyDlpV2RiskAnalysisJobConfig
    Configuration for a risk analysis job. See https://cloud.google.com/dlp/docs/concepts-risk-analysis to learn more.
    """
    
    actions: Optional[list[shared_googleprivacydlpv2action.GooglePrivacyDlpV2Action]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    privacy_metric: Optional[shared_googleprivacydlpv2privacymetric.GooglePrivacyDlpV2PrivacyMetric] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacyMetric') }})
    source_table: Optional[shared_googleprivacydlpv2bigquerytable.GooglePrivacyDlpV2BigQueryTable] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceTable') }})
    
