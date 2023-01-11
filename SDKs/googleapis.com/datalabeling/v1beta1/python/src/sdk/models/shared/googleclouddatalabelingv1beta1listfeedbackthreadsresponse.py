import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddatalabelingv1beta1feedbackthread as shared_googleclouddatalabelingv1beta1feedbackthread


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse:
    r"""GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse
    Results for listing FeedbackThreads.
    """
    
    feedback_threads: Optional[list[shared_googleclouddatalabelingv1beta1feedbackthread.GoogleCloudDatalabelingV1beta1FeedbackThread]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feedbackThreads') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
