import dataclasses
from typing import Any,Optional
from ..shared import serviceplanscollection as shared_serviceplanscollection


@dataclasses.dataclass
class ListServicePlansQueryParams:
    filter: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'deepObject', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    sort_by: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_by', 'style': 'deepObject', 'explode': True }})
    

@dataclasses.dataclass
class ListServicePlansRequest:
    query_params: ListServicePlansQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListServicePlansResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    service_plans_collection: Optional[shared_serviceplanscollection.ServicePlansCollection] = dataclasses.field(default=None)
    
