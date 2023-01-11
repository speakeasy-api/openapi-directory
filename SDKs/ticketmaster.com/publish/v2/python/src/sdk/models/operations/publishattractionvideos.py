import dataclasses
from typing import Optional
from ..shared import video as shared_video


@dataclasses.dataclass
class PublishAttractionVideosPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PublishAttractionVideosHeaders:
    tmps_correlation_id: str = dataclasses.field(metadata={'header': { 'field_name': 'TMPS-Correlation-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PublishAttractionVideosRequest:
    headers: PublishAttractionVideosHeaders = dataclasses.field()
    path_params: PublishAttractionVideosPathParams = dataclasses.field()
    request: shared_video.Video = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PublishAttractionVideosResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
