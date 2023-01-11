import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import userupdatecontent as shared_userupdatecontent
from ..shared import user as shared_user


@dataclasses.dataclass
class SaveCorporateUserRequest:
    request: shared_userupdatecontent.UserUpdateContent = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SaveCorporateUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    user: Optional[shared_user.User] = dataclasses.field(default=None)
    
