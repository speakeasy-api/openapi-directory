"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import googleclouddialogflowv2suggestarticlesresponse as shared_googleclouddialogflowv2suggestarticlesresponse
from ..shared import googleclouddialogflowv2suggestfaqanswersresponse as shared_googleclouddialogflowv2suggestfaqanswersresponse
from ..shared import googleclouddialogflowv2suggestsmartrepliesresponse as shared_googleclouddialogflowv2suggestsmartrepliesresponse
from ..shared import googlerpcstatus as shared_googlerpcstatus
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GoogleCloudDialogflowV2SuggestionResult:
    r"""One response of different type of suggestion response which is used in the response of Participants.AnalyzeContent and Participants.AnalyzeContent, as well as HumanAgentAssistantEvent."""
    
    error: Optional[shared_googlerpcstatus.GoogleRPCStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('error'), 'exclude': lambda f: f is None }})
    r"""The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors)."""  
    suggest_articles_response: Optional[shared_googleclouddialogflowv2suggestarticlesresponse.GoogleCloudDialogflowV2SuggestArticlesResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('suggestArticlesResponse'), 'exclude': lambda f: f is None }})
    r"""The response message for Participants.SuggestArticles."""  
    suggest_faq_answers_response: Optional[shared_googleclouddialogflowv2suggestfaqanswersresponse.GoogleCloudDialogflowV2SuggestFaqAnswersResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('suggestFaqAnswersResponse'), 'exclude': lambda f: f is None }})
    r"""The request message for Participants.SuggestFaqAnswers."""  
    suggest_smart_replies_response: Optional[shared_googleclouddialogflowv2suggestsmartrepliesresponse.GoogleCloudDialogflowV2SuggestSmartRepliesResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('suggestSmartRepliesResponse'), 'exclude': lambda f: f is None }})
    r"""The response message for Participants.SuggestSmartReplies."""  
    