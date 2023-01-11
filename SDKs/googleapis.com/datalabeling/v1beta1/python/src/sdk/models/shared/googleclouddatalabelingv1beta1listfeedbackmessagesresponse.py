import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddatalabelingv1beta1feedbackmessage as shared_googleclouddatalabelingv1beta1feedbackmessage


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse:
    r"""GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse
    Results for listing FeedbackMessages.
    """
    
    feedback_messages: Optional[list[shared_googleclouddatalabelingv1beta1feedbackmessage.GoogleCloudDatalabelingV1beta1FeedbackMessage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feedbackMessages') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
