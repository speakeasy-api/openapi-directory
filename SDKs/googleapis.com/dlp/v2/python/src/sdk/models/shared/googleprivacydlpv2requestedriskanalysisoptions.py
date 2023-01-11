import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2riskanalysisjobconfig as shared_googleprivacydlpv2riskanalysisjobconfig


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2RequestedRiskAnalysisOptions:
    r"""GooglePrivacyDlpV2RequestedRiskAnalysisOptions
    Risk analysis options.
    """
    
    job_config: Optional[shared_googleprivacydlpv2riskanalysisjobconfig.GooglePrivacyDlpV2RiskAnalysisJobConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobConfig') }})
    
