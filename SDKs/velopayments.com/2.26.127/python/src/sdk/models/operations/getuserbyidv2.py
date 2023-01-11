import dataclasses
from typing import Any,Optional
from ..shared import userresponse as shared_userresponse


@dataclasses.dataclass
class GetUserByIDV2PathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUserByIDV2Request:
    path_params: GetUserByIDV2PathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUserByIDV2Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    user_response: Optional[shared_userresponse.UserResponse] = dataclasses.field(default=None)
    inline_response_401: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    inline_response_404: Optional[Any] = dataclasses.field(default=None)
    
