import dataclasses
from typing import Optional
from ..shared import mediaitemwrapped as shared_mediaitemwrapped


@dataclasses.dataclass
class GetResourcesMediaIDRelatedMediaFormatPathParams:
    format: str = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetResourcesMediaIDRelatedMediaFormatQueryParams:
    max: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'max', 'style': 'form', 'explode': False }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': False }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': False }})
    

@dataclasses.dataclass
class GetResourcesMediaIDRelatedMediaFormatRequest:
    path_params: GetResourcesMediaIDRelatedMediaFormatPathParams = dataclasses.field()
    query_params: GetResourcesMediaIDRelatedMediaFormatQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetResourcesMediaIDRelatedMediaFormatResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    media_item_wrappeds: Optional[list[shared_mediaitemwrapped.MediaItemWrapped]] = dataclasses.field(default=None)
    
