import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudrecommenderv1insight as shared_googlecloudrecommenderv1insight


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRecommenderV1ListInsightsResponse:
    r"""GoogleCloudRecommenderV1ListInsightsResponse
    Response to the `ListInsights` method.
    """
    
    insights: Optional[list[shared_googlecloudrecommenderv1insight.GoogleCloudRecommenderV1Insight]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insights') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
