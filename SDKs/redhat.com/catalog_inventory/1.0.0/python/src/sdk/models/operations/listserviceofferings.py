import dataclasses
from typing import Any,Optional
from ..shared import serviceofferingscollection as shared_serviceofferingscollection


@dataclasses.dataclass
class ListServiceOfferingsQueryParams:
    filter: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'deepObject', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    sort_by: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_by', 'style': 'deepObject', 'explode': True }})
    

@dataclasses.dataclass
class ListServiceOfferingsRequest:
    query_params: ListServiceOfferingsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListServiceOfferingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    service_offerings_collection: Optional[shared_serviceofferingscollection.ServiceOfferingsCollection] = dataclasses.field(default=None)
    
