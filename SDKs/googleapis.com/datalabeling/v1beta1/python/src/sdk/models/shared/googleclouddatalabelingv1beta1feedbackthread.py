import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddatalabelingv1beta1feedbackthreadmetadata as shared_googleclouddatalabelingv1beta1feedbackthreadmetadata


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1FeedbackThread:
    r"""GoogleCloudDatalabelingV1beta1FeedbackThread
    A feedback thread of a certain labeling task on a certain annotated dataset.
    """
    
    feedback_thread_metadata: Optional[shared_googleclouddatalabelingv1beta1feedbackthreadmetadata.GoogleCloudDatalabelingV1beta1FeedbackThreadMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feedbackThreadMetadata') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
