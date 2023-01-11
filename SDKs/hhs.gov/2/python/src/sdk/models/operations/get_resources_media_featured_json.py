import dataclasses
from typing import Optional
from ..shared import mediaitem as shared_mediaitem


@dataclasses.dataclass
class GetResourcesMediaFeaturedJSONQueryParams:
    max: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'max', 'style': 'form', 'explode': False }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': False }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': False }})
    

@dataclasses.dataclass
class GetResourcesMediaFeaturedJSONRequest:
    query_params: GetResourcesMediaFeaturedJSONQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetResourcesMediaFeaturedJSONResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    media_items: Optional[list[shared_mediaitem.MediaItem]] = dataclasses.field(default=None)
    
