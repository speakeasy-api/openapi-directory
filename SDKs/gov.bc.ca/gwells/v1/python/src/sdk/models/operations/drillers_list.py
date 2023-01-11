import dataclasses
from typing import Optional
from ..shared import personlist as shared_personlist


@dataclasses.dataclass
class DrillersListQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    ordering: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ordering', 'style': 'form', 'explode': True }})
    search: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DrillersListRequest:
    query_params: DrillersListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DrillersListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    person_lists: Optional[list[shared_personlist.PersonList]] = dataclasses.field(default=None)
    
