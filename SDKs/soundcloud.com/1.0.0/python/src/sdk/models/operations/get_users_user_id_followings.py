import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import error as shared_error
from ..shared import users as shared_users
from ..shared import userslist as shared_userslist


@dataclasses.dataclass
class GetUsersUserIDFollowingsPathParams:
    user_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUsersUserIDFollowingsQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetUsersUserIDFollowingsSecurity:
    auth_header: shared_security.SchemeAuthHeader = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    client_id: shared_security.SchemeClientID = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class GetUsersUserIDFollowingsRequest:
    path_params: GetUsersUserIDFollowingsPathParams = dataclasses.field()
    query_params: GetUsersUserIDFollowingsQueryParams = dataclasses.field()
    security: GetUsersUserIDFollowingsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetUsersUserIDFollowingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    get_users_user_id_followings_200_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    
