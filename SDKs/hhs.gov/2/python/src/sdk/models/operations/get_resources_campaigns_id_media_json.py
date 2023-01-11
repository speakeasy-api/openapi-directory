import dataclasses
from typing import Optional
from ..shared import mediaitemwrapped as shared_mediaitemwrapped


@dataclasses.dataclass
class GetResourcesCampaignsIDMediaJSONPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetResourcesCampaignsIDMediaJSONQueryParams:
    max: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'max', 'style': 'form', 'explode': False }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': False }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': False }})
    

@dataclasses.dataclass
class GetResourcesCampaignsIDMediaJSONRequest:
    path_params: GetResourcesCampaignsIDMediaJSONPathParams = dataclasses.field()
    query_params: GetResourcesCampaignsIDMediaJSONQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetResourcesCampaignsIDMediaJSONResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    media_item_wrapped: Optional[shared_mediaitemwrapped.MediaItemWrapped] = dataclasses.field(default=None)
    
