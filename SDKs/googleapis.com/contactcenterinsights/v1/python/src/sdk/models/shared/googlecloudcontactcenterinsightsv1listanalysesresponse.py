import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudcontactcenterinsightsv1analysis as shared_googlecloudcontactcenterinsightsv1analysis


@dataclass_json
@dataclasses.dataclass
class GoogleCloudContactcenterinsightsV1ListAnalysesResponse:
    r"""GoogleCloudContactcenterinsightsV1ListAnalysesResponse
    The response to list analyses.
    """
    
    analyses: Optional[list[shared_googlecloudcontactcenterinsightsv1analysis.GoogleCloudContactcenterinsightsV1Analysis]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analyses') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
