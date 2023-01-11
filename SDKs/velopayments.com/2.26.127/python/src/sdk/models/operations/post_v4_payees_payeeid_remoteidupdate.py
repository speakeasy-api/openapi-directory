import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import updateremoteidrequest_2 as shared_updateremoteidrequest_2


@dataclasses.dataclass
class PostV4PayeesPayeeIDRemoteIDUpdatePathParams:
    payee_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'payeeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostV4PayeesPayeeIDRemoteIDUpdateRequest:
    path_params: PostV4PayeesPayeeIDRemoteIDUpdatePathParams = dataclasses.field()
    request: shared_updateremoteidrequest_2.UpdateRemoteIDRequest2 = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostV4PayeesPayeeIDRemoteIDUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    inline_response_400: Optional[Any] = dataclasses.field(default=None)
    inline_response_401: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    inline_response_404: Optional[Any] = dataclasses.field(default=None)
    inline_response_409: Optional[Any] = dataclasses.field(default=None)
    
