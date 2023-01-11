import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import feedbackloopout as shared_feedbackloopout


@dataclasses.dataclass
class JapaneseNameMatchFeedbackLoopPathParams:
    japanese_given_name_latin: str = dataclasses.field(metadata={'path_param': { 'field_name': 'japaneseGivenNameLatin', 'style': 'simple', 'explode': False }})
    japanese_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'japaneseName', 'style': 'simple', 'explode': False }})
    japanese_surname_latin: str = dataclasses.field(metadata={'path_param': { 'field_name': 'japaneseSurnameLatin', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class JapaneseNameMatchFeedbackLoopSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class JapaneseNameMatchFeedbackLoopRequest:
    path_params: JapaneseNameMatchFeedbackLoopPathParams = dataclasses.field()
    security: JapaneseNameMatchFeedbackLoopSecurity = dataclasses.field()
    

@dataclasses.dataclass
class JapaneseNameMatchFeedbackLoopResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    feedback_loop_out: Optional[shared_feedbackloopout.FeedbackLoopOut] = dataclasses.field(default=None)
    
