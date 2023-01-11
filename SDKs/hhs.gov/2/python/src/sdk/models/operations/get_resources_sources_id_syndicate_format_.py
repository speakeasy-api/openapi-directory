import dataclasses
from typing import Optional
from ..shared import mediaitemwrapped as shared_mediaitemwrapped


@dataclasses.dataclass
class GetResourcesSourcesIDSyndicateFormatPathParams:
    format: str = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetResourcesSourcesIDSyndicateFormatQueryParams:
    display_method: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'displayMethod', 'style': 'form', 'explode': False }})
    

@dataclasses.dataclass
class GetResourcesSourcesIDSyndicateFormatRequest:
    path_params: GetResourcesSourcesIDSyndicateFormatPathParams = dataclasses.field()
    query_params: GetResourcesSourcesIDSyndicateFormatQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetResourcesSourcesIDSyndicateFormatResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    media_item_wrappeds: Optional[list[shared_mediaitemwrapped.MediaItemWrapped]] = dataclasses.field(default=None)
    
