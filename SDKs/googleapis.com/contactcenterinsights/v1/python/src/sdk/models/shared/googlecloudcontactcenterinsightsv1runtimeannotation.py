import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudcontactcenterinsightsv1answerfeedback as shared_googlecloudcontactcenterinsightsv1answerfeedback
from ..shared import googlecloudcontactcenterinsightsv1articlesuggestiondata as shared_googlecloudcontactcenterinsightsv1articlesuggestiondata
from ..shared import googlecloudcontactcenterinsightsv1dialogflowinteractiondata as shared_googlecloudcontactcenterinsightsv1dialogflowinteractiondata
from ..shared import googlecloudcontactcenterinsightsv1annotationboundary as shared_googlecloudcontactcenterinsightsv1annotationboundary
from ..shared import googlecloudcontactcenterinsightsv1faqanswerdata as shared_googlecloudcontactcenterinsightsv1faqanswerdata
from ..shared import googlecloudcontactcenterinsightsv1smartcomposesuggestiondata as shared_googlecloudcontactcenterinsightsv1smartcomposesuggestiondata
from ..shared import googlecloudcontactcenterinsightsv1smartreplydata as shared_googlecloudcontactcenterinsightsv1smartreplydata


@dataclass_json
@dataclasses.dataclass
class GoogleCloudContactcenterinsightsV1RuntimeAnnotation:
    r"""GoogleCloudContactcenterinsightsV1RuntimeAnnotation
    An annotation that was generated during the customer and agent interaction.
    """
    
    annotation_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationId') }})
    answer_feedback: Optional[shared_googlecloudcontactcenterinsightsv1answerfeedback.GoogleCloudContactcenterinsightsV1AnswerFeedback] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answerFeedback') }})
    article_suggestion: Optional[shared_googlecloudcontactcenterinsightsv1articlesuggestiondata.GoogleCloudContactcenterinsightsV1ArticleSuggestionData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('articleSuggestion') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    dialogflow_interaction: Optional[shared_googlecloudcontactcenterinsightsv1dialogflowinteractiondata.GoogleCloudContactcenterinsightsV1DialogflowInteractionData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dialogflowInteraction') }})
    end_boundary: Optional[shared_googlecloudcontactcenterinsightsv1annotationboundary.GoogleCloudContactcenterinsightsV1AnnotationBoundary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endBoundary') }})
    faq_answer: Optional[shared_googlecloudcontactcenterinsightsv1faqanswerdata.GoogleCloudContactcenterinsightsV1FaqAnswerData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('faqAnswer') }})
    smart_compose_suggestion: Optional[shared_googlecloudcontactcenterinsightsv1smartcomposesuggestiondata.GoogleCloudContactcenterinsightsV1SmartComposeSuggestionData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('smartComposeSuggestion') }})
    smart_reply: Optional[shared_googlecloudcontactcenterinsightsv1smartreplydata.GoogleCloudContactcenterinsightsV1SmartReplyData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('smartReply') }})
    start_boundary: Optional[shared_googlecloudcontactcenterinsightsv1annotationboundary.GoogleCloudContactcenterinsightsV1AnnotationBoundary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startBoundary') }})
    
