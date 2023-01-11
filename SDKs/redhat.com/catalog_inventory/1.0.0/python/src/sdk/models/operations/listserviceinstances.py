import dataclasses
from typing import Any,Optional
from ..shared import serviceinstancescollection as shared_serviceinstancescollection


@dataclasses.dataclass
class ListServiceInstancesQueryParams:
    filter: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'deepObject', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    sort_by: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_by', 'style': 'deepObject', 'explode': True }})
    

@dataclasses.dataclass
class ListServiceInstancesRequest:
    query_params: ListServiceInstancesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListServiceInstancesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    service_instances_collection: Optional[shared_serviceinstancescollection.ServiceInstancesCollection] = dataclasses.field(default=None)
    
