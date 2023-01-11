import dataclasses
from typing import Optional
from ..shared import survey as shared_survey


@dataclasses.dataclass
class SurveysListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    surveys: Optional[list[shared_survey.Survey]] = dataclasses.field(default=None)
    
