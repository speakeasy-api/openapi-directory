import dataclasses
from typing import Any,Optional
from ..shared import serviceinventoriescollection as shared_serviceinventoriescollection


@dataclasses.dataclass
class ListServiceInventoriesQueryParams:
    filter: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'deepObject', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    sort_by: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_by', 'style': 'deepObject', 'explode': True }})
    

@dataclasses.dataclass
class ListServiceInventoriesRequest:
    query_params: ListServiceInventoriesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListServiceInventoriesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    service_inventories_collection: Optional[shared_serviceinventoriescollection.ServiceInventoriesCollection] = dataclasses.field(default=None)
    
