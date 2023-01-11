import dataclasses
from typing import Optional
from ..shared import listtagsresponse as shared_listtagsresponse


@dataclasses.dataclass
class GetTagsQueryParams:
    page_size_: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page[size]', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTagsRequest:
    query_params: GetTagsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTagsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_tags_response: Optional[shared_listtagsresponse.ListTagsResponse] = dataclasses.field(default=None)
    
