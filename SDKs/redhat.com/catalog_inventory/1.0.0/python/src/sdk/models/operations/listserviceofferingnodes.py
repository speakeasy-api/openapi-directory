import dataclasses
from typing import Any,Optional
from ..shared import serviceofferingnodescollection as shared_serviceofferingnodescollection


@dataclasses.dataclass
class ListServiceOfferingNodesQueryParams:
    filter: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'deepObject', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    sort_by: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_by', 'style': 'deepObject', 'explode': True }})
    

@dataclasses.dataclass
class ListServiceOfferingNodesRequest:
    query_params: ListServiceOfferingNodesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListServiceOfferingNodesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    service_offering_nodes_collection: Optional[shared_serviceofferingnodescollection.ServiceOfferingNodesCollection] = dataclasses.field(default=None)
    
