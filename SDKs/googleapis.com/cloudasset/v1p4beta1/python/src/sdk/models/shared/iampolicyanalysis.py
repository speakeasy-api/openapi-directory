import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import iampolicyanalysisquery as shared_iampolicyanalysisquery
from ..shared import iampolicyanalysisresult as shared_iampolicyanalysisresult


@dataclass_json
@dataclasses.dataclass
class IamPolicyAnalysis:
    r"""IamPolicyAnalysis
    An analysis message to group the query and results.
    """
    
    analysis_query: Optional[shared_iampolicyanalysisquery.IamPolicyAnalysisQuery] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analysisQuery') }})
    analysis_results: Optional[list[shared_iampolicyanalysisresult.IamPolicyAnalysisResult]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analysisResults') }})
    fully_explored: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullyExplored') }})
    
