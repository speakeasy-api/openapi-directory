import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import quizmarkresponse as shared_quizmarkresponse


@dataclasses.dataclass
class GetOfferingsOfferingIDAnalyticsMarksQuizzesPathParams:
    offering_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOfferingsOfferingIDAnalyticsMarksQuizzesRequest:
    path_params: GetOfferingsOfferingIDAnalyticsMarksQuizzesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOfferingsOfferingIDAnalyticsMarksQuizzesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    quiz_mark_responses: Optional[list[shared_quizmarkresponse.QuizMarkResponse]] = dataclasses.field(default=None)
    
