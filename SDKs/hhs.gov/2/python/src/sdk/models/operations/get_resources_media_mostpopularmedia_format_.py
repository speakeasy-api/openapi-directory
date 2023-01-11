import dataclasses
from typing import Optional
from ..shared import mediaitemwrapped as shared_mediaitemwrapped


@dataclasses.dataclass
class GetResourcesMediaMostPopularMediaFormatPathParams:
    format: str = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetResourcesMediaMostPopularMediaFormatQueryParams:
    max: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'max', 'style': 'form', 'explode': False }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': False }})
    

@dataclasses.dataclass
class GetResourcesMediaMostPopularMediaFormatRequest:
    path_params: GetResourcesMediaMostPopularMediaFormatPathParams = dataclasses.field()
    query_params: GetResourcesMediaMostPopularMediaFormatQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetResourcesMediaMostPopularMediaFormatResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    media_item_wrappeds: Optional[list[shared_mediaitemwrapped.MediaItemWrapped]] = dataclasses.field(default=None)
    
