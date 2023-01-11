import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import access_enum as shared_access_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import error as shared_error
from ..shared import playlists as shared_playlists
from ..shared import playlist as shared_playlist


@dataclasses.dataclass
class GetPlaylistsQueryParams:
    q: str = dataclasses.field(metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    access: Optional[list[shared_access_enum.AccessEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access', 'style': 'form', 'explode': False }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    linked_partitioning: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'linked_partitioning', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPlaylistsSecurity:
    auth_header: shared_security.SchemeAuthHeader = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    client_id: shared_security.SchemeClientID = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class GetPlaylistsRequest:
    query_params: GetPlaylistsQueryParams = dataclasses.field()
    security: GetPlaylistsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetPlaylistsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    get_playlists_200_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    
