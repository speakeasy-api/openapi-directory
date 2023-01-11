import dataclasses
from typing import Any,Optional
from ..shared import errornotfound as shared_errornotfound
from ..shared import serviceofferingscollection as shared_serviceofferingscollection


@dataclasses.dataclass
class ListSourceServiceOfferingsPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListSourceServiceOfferingsQueryParams:
    filter: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'deepObject', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    sort_by: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_by', 'style': 'deepObject', 'explode': True }})
    

@dataclasses.dataclass
class ListSourceServiceOfferingsRequest:
    path_params: ListSourceServiceOfferingsPathParams = dataclasses.field()
    query_params: ListSourceServiceOfferingsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListSourceServiceOfferingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_not_found: Optional[shared_errornotfound.ErrorNotFound] = dataclasses.field(default=None)
    service_offerings_collection: Optional[shared_serviceofferingscollection.ServiceOfferingsCollection] = dataclasses.field(default=None)
    
