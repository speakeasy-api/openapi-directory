import dataclasses
from typing import Any,Optional
from ..shared import sourcescollection as shared_sourcescollection


@dataclasses.dataclass
class ListSourcesQueryParams:
    filter: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'deepObject', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    sort_by: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_by', 'style': 'deepObject', 'explode': True }})
    

@dataclasses.dataclass
class ListSourcesRequest:
    query_params: ListSourcesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListSourcesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    sources_collection: Optional[shared_sourcescollection.SourcesCollection] = dataclasses.field(default=None)
    
