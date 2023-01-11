import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import access_enum as shared_access_enum
from ..shared import bpm as shared_bpm
from ..shared import created_at as shared_created_at
from ..shared import duration as shared_duration
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import error as shared_error
from ..shared import tracks as shared_tracks
from ..shared import track as shared_track


@dataclasses.dataclass
class GetTracksQueryParams:
    q: str = dataclasses.field(metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    access: Optional[list[shared_access_enum.AccessEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access', 'style': 'form', 'explode': False }})
    bpm: Optional[shared_bpm.Bpm] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'bpm', 'style': 'deepObject', 'explode': True }})
    created_at: Optional[shared_created_at.CreatedAt] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'created_at', 'style': 'deepObject', 'explode': True }})
    duration: Optional[shared_duration.Duration] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'duration', 'style': 'deepObject', 'explode': True }})
    genres: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'genres', 'style': 'form', 'explode': True }})
    ids: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    linked_partitioning: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'linked_partitioning', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    tags: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tags', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTracksSecurity:
    auth_header: shared_security.SchemeAuthHeader = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    client_id: shared_security.SchemeClientID = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class GetTracksRequest:
    query_params: GetTracksQueryParams = dataclasses.field()
    security: GetTracksSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTracksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    get_tracks_200_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    
