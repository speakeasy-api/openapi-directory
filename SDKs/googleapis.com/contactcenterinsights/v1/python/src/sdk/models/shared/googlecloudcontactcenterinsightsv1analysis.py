import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudcontactcenterinsightsv1analysisresult as shared_googlecloudcontactcenterinsightsv1analysisresult
from ..shared import googlecloudcontactcenterinsightsv1annotatorselector as shared_googlecloudcontactcenterinsightsv1annotatorselector


@dataclass_json
@dataclasses.dataclass
class GoogleCloudContactcenterinsightsV1Analysis:
    r"""GoogleCloudContactcenterinsightsV1Analysis
    The analysis resource.
    """
    
    analysis_result: Optional[shared_googlecloudcontactcenterinsightsv1analysisresult.GoogleCloudContactcenterinsightsV1AnalysisResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analysisResult') }})
    annotator_selector: Optional[shared_googlecloudcontactcenterinsightsv1annotatorselector.GoogleCloudContactcenterinsightsV1AnnotatorSelector] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotatorSelector') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    request_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestTime') }})
    

@dataclass_json
@dataclasses.dataclass
class GoogleCloudContactcenterinsightsV1AnalysisInput:
    r"""GoogleCloudContactcenterinsightsV1AnalysisInput
    The analysis resource.
    """
    
    analysis_result: Optional[shared_googlecloudcontactcenterinsightsv1analysisresult.GoogleCloudContactcenterinsightsV1AnalysisResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analysisResult') }})
    annotator_selector: Optional[shared_googlecloudcontactcenterinsightsv1annotatorselector.GoogleCloudContactcenterinsightsV1AnnotatorSelector] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotatorSelector') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
