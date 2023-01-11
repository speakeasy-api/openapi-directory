import dataclasses
from typing import Optional
from ..shared import earnings as shared_earnings
from ..shared import error as shared_error


@dataclasses.dataclass
class GetEarningsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    earnings: Optional[shared_earnings.Earnings] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
