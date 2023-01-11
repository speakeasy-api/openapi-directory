import dataclasses
from typing import Any,Optional
from ..shared import invitepayeerequest_2 as shared_invitepayeerequest_2


@dataclasses.dataclass
class ResendPayeeInviteV4PathParams:
    payee_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'payeeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ResendPayeeInviteV4Request:
    path_params: ResendPayeeInviteV4PathParams = dataclasses.field()
    request: shared_invitepayeerequest_2.InvitePayeeRequest2 = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ResendPayeeInviteV4Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    inline_response_400: Optional[Any] = dataclasses.field(default=None)
    inline_response_401: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    inline_response_404: Optional[Any] = dataclasses.field(default=None)
    inline_response_409: Optional[Any] = dataclasses.field(default=None)
    
