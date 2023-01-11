import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import access_enum as shared_access_enum
from ..shared import security as shared_security
from ..shared import error as shared_error
from ..shared import tracks as shared_tracks
from ..shared import track as shared_track


@dataclasses.dataclass
class GetTracksTrackIDRelatedPathParams:
    track_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'track_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTracksTrackIDRelatedQueryParams:
    access: Optional[list[shared_access_enum.AccessEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access', 'style': 'form', 'explode': False }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    linked_partitioning: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'linked_partitioning', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTracksTrackIDRelatedSecurity:
    client_id: shared_security.SchemeClientID = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class GetTracksTrackIDRelatedRequest:
    path_params: GetTracksTrackIDRelatedPathParams = dataclasses.field()
    query_params: GetTracksTrackIDRelatedQueryParams = dataclasses.field()
    security: GetTracksTrackIDRelatedSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTracksTrackIDRelatedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    get_tracks_track_id_related_200_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    
