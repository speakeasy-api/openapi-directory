import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import useroptions as shared_useroptions


@dataclasses.dataclass
class UpdateAccountUserPathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateAccountUserSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class UpdateAccountUserRequest:
    path_params: UpdateAccountUserPathParams = dataclasses.field()
    request: shared_useroptions.UserOptions = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateAccountUserSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UpdateAccountUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
