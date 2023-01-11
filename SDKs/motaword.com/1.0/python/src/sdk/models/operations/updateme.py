import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import userupdatecontent as shared_userupdatecontent
from ..shared import error as shared_error
from ..shared import user as shared_user


@dataclasses.dataclass
class UpdateMeRequest:
    request: Optional[shared_userupdatecontent.UserUpdateContent] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateMeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    user: Optional[shared_user.User] = dataclasses.field(default=None)
    
