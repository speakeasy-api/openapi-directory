import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import error as shared_error
from ..shared import users as shared_users
from ..shared import userslist as shared_userslist


@dataclasses.dataclass
class GetMeFollowersQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetMeFollowersSecurity:
    auth_header: shared_security.SchemeAuthHeader = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetMeFollowersRequest:
    query_params: GetMeFollowersQueryParams = dataclasses.field()
    security: GetMeFollowersSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetMeFollowersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    get_me_followers_200_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    
