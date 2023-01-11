import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import user as shared_user


@dataclasses.dataclass
class GetMeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    user: Optional[shared_user.User] = dataclasses.field(default=None)
    
