import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import updateremoteidrequest as shared_updateremoteidrequest


@dataclasses.dataclass
class PostV3PayeesPayeeIDRemoteIDUpdatePathParams:
    payee_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'payeeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostV3PayeesPayeeIDRemoteIDUpdateRequest:
    path_params: PostV3PayeesPayeeIDRemoteIDUpdatePathParams = dataclasses.field()
    request: shared_updateremoteidrequest.UpdateRemoteIDRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostV3PayeesPayeeIDRemoteIDUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    inline_response_400: Optional[Any] = dataclasses.field(default=None)
    inline_response_401: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    inline_response_404: Optional[Any] = dataclasses.field(default=None)
    inline_response_409: Optional[Any] = dataclasses.field(default=None)
    
