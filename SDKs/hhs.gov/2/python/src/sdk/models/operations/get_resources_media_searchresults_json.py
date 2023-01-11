import dataclasses
from typing import Optional
from ..shared import mediaitemwrapped as shared_mediaitemwrapped


@dataclasses.dataclass
class GetResourcesMediaSearchResultsJSONQueryParams:
    q: str = dataclasses.field(metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': False }})
    max: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'max', 'style': 'form', 'explode': False }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': False }})
    

@dataclasses.dataclass
class GetResourcesMediaSearchResultsJSONRequest:
    query_params: GetResourcesMediaSearchResultsJSONQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetResourcesMediaSearchResultsJSONResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    media_item_wrappeds: Optional[list[shared_mediaitemwrapped.MediaItemWrapped]] = dataclasses.field(default=None)
    
