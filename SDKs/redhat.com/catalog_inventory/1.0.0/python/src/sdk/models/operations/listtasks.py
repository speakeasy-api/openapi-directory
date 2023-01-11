import dataclasses
from typing import Any,Optional
from ..shared import taskscollection as shared_taskscollection


@dataclasses.dataclass
class ListTasksQueryParams:
    filter: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'deepObject', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    sort_by: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_by', 'style': 'deepObject', 'explode': True }})
    

@dataclasses.dataclass
class ListTasksRequest:
    query_params: ListTasksQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListTasksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    tasks_collection: Optional[shared_taskscollection.TasksCollection] = dataclasses.field(default=None)
    
