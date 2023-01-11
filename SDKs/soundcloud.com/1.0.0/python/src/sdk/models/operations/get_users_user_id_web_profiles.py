import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import error as shared_error
from ..shared import webprofiles as shared_webprofiles


@dataclasses.dataclass
class GetUsersUserIDWebProfilesPathParams:
    user_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUsersUserIDWebProfilesQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetUsersUserIDWebProfilesSecurity:
    auth_header: shared_security.SchemeAuthHeader = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    client_id: shared_security.SchemeClientID = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class GetUsersUserIDWebProfilesRequest:
    path_params: GetUsersUserIDWebProfilesPathParams = dataclasses.field()
    query_params: GetUsersUserIDWebProfilesQueryParams = dataclasses.field()
    security: GetUsersUserIDWebProfilesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetUsersUserIDWebProfilesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    web_profiles: Optional[list[shared_webprofiles.WebProfiles]] = dataclasses.field(default=None)
    
