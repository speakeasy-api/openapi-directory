import dataclasses
from typing import Any,Optional
from ..shared import errornotfound as shared_errornotfound
from ..shared import serviceofferingnodescollection as shared_serviceofferingnodescollection


@dataclasses.dataclass
class ListSourceServiceOfferingNodesPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListSourceServiceOfferingNodesQueryParams:
    filter: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'deepObject', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    sort_by: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_by', 'style': 'deepObject', 'explode': True }})
    

@dataclasses.dataclass
class ListSourceServiceOfferingNodesRequest:
    path_params: ListSourceServiceOfferingNodesPathParams = dataclasses.field()
    query_params: ListSourceServiceOfferingNodesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListSourceServiceOfferingNodesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_not_found: Optional[shared_errornotfound.ErrorNotFound] = dataclasses.field(default=None)
    service_offering_nodes_collection: Optional[shared_serviceofferingnodescollection.ServiceOfferingNodesCollection] = dataclasses.field(default=None)
    
