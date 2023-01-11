import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import error as shared_error
from ..shared import comments as shared_comments
from ..shared import comment as shared_comment


@dataclasses.dataclass
class GetTracksTrackIDCommentsPathParams:
    track_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'track_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTracksTrackIDCommentsQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    linked_partitioning: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'linked_partitioning', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTracksTrackIDCommentsSecurity:
    client_id: shared_security.SchemeClientID = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class GetTracksTrackIDCommentsRequest:
    path_params: GetTracksTrackIDCommentsPathParams = dataclasses.field()
    query_params: GetTracksTrackIDCommentsQueryParams = dataclasses.field()
    security: GetTracksTrackIDCommentsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTracksTrackIDCommentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    get_tracks_track_id_comments_200_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    
