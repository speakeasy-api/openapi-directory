import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import access_enum as shared_access_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import error as shared_error
from ..shared import tracks as shared_tracks
from ..shared import track as shared_track


@dataclasses.dataclass
class GetUsersUserIDLikesTracksPathParams:
    user_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUsersUserIDLikesTracksQueryParams:
    access: Optional[list[shared_access_enum.AccessEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access', 'style': 'form', 'explode': False }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    linked_partitioning: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'linked_partitioning', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetUsersUserIDLikesTracksSecurity:
    auth_header: shared_security.SchemeAuthHeader = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    client_id: shared_security.SchemeClientID = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class GetUsersUserIDLikesTracksRequest:
    path_params: GetUsersUserIDLikesTracksPathParams = dataclasses.field()
    query_params: GetUsersUserIDLikesTracksQueryParams = dataclasses.field()
    security: GetUsersUserIDLikesTracksSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetUsersUserIDLikesTracksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    get_users_user_id_likes_tracks_200_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    
