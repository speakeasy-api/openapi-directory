import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import iampolicyanalysis as shared_iampolicyanalysis
from ..shared import googlecloudassetv1p4beta1analysisstate as shared_googlecloudassetv1p4beta1analysisstate


@dataclass_json
@dataclasses.dataclass
class AnalyzeIamPolicyResponse:
    r"""AnalyzeIamPolicyResponse
    A response message for AssetService.AnalyzeIamPolicy.
    """
    
    fully_explored: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullyExplored') }})
    main_analysis: Optional[shared_iampolicyanalysis.IamPolicyAnalysis] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mainAnalysis') }})
    non_critical_errors: Optional[list[shared_googlecloudassetv1p4beta1analysisstate.GoogleCloudAssetV1p4beta1AnalysisState]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nonCriticalErrors') }})
    service_account_impersonation_analysis: Optional[list[shared_iampolicyanalysis.IamPolicyAnalysis]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccountImpersonationAnalysis') }})
    
