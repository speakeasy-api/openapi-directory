import dataclasses
from typing import Any,Optional
from ..shared import tagscollection as shared_tagscollection


@dataclasses.dataclass
class ListTagsQueryParams:
    filter: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'deepObject', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    sort_by: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_by', 'style': 'deepObject', 'explode': True }})
    

@dataclasses.dataclass
class ListTagsRequest:
    query_params: ListTagsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListTagsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    tags_collection: Optional[shared_tagscollection.TagsCollection] = dataclasses.field(default=None)
    
