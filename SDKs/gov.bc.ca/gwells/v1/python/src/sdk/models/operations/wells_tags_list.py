import dataclasses
from typing import Optional
from ..shared import welltagsearch as shared_welltagsearch


@dataclasses.dataclass
class WellsTagsListQueryParams:
    ordering: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ordering', 'style': 'form', 'explode': True }})
    search: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class WellsTagsListRequest:
    query_params: WellsTagsListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class WellsTagsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    well_tag_searches: Optional[list[shared_welltagsearch.WellTagSearch]] = dataclasses.field(default=None)
    
