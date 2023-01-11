import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudcontactcenterinsightsv1analysisresultcallanalysismetadata as shared_googlecloudcontactcenterinsightsv1analysisresultcallanalysismetadata


@dataclass_json
@dataclasses.dataclass
class GoogleCloudContactcenterinsightsV1AnalysisResult:
    r"""GoogleCloudContactcenterinsightsV1AnalysisResult
    The result of an analysis.
    """
    
    call_analysis_metadata: Optional[shared_googlecloudcontactcenterinsightsv1analysisresultcallanalysismetadata.GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callAnalysisMetadata') }})
    end_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    
