import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import iampolicyanalysisquery as shared_iampolicyanalysisquery
from ..shared import options as shared_options
from ..shared import iampolicyanalysisoutputconfig as shared_iampolicyanalysisoutputconfig


@dataclass_json
@dataclasses.dataclass
class ExportIamPolicyAnalysisRequest:
    r"""ExportIamPolicyAnalysisRequest
    A request message for AssetService.ExportIamPolicyAnalysis.
    """
    
    analysis_query: Optional[shared_iampolicyanalysisquery.IamPolicyAnalysisQuery] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analysisQuery') }})
    options: Optional[shared_options.Options] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    output_config: Optional[shared_iampolicyanalysisoutputconfig.IamPolicyAnalysisOutputConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputConfig') }})
    
