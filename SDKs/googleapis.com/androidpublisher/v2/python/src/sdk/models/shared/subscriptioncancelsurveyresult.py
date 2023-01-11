import dataclasses
from typing import Optional


@dataclasses.dataclass
class SubscriptionCancelSurveyResult:
    r"""SubscriptionCancelSurveyResult
    Information provided by the user when they complete the subscription cancellation flow (cancellation reason survey).
    """
    
    cancel_survey_reason: Optional[int] = dataclasses.field(default=None)
    user_input_cancel_reason: Optional[str] = dataclasses.field(default=None)
    
