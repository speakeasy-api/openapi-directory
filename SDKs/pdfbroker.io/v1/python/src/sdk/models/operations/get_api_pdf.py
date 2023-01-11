import dataclasses
from typing import Optional
from ..shared import errorresponsedto as shared_errorresponsedto


@dataclasses.dataclass
class GetAPIPdfResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_dto: Optional[shared_errorresponsedto.ErrorResponseDto] = dataclasses.field(default=None)
    
