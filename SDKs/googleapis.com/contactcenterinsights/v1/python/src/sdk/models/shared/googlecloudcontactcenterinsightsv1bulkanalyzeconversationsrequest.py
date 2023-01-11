import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudcontactcenterinsightsv1annotatorselector as shared_googlecloudcontactcenterinsightsv1annotatorselector


@dataclass_json
@dataclasses.dataclass
class GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest:
    r"""GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest
    The request to analyze conversations in bulk.
    """
    
    analysis_percentage: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analysisPercentage') }})
    annotator_selector: Optional[shared_googlecloudcontactcenterinsightsv1annotatorselector.GoogleCloudContactcenterinsightsV1AnnotatorSelector] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotatorSelector') }})
    filter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    parent: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    
