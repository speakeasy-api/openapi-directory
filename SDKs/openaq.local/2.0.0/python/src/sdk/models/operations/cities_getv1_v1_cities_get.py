import dataclasses
from typing import Any,Optional
from ..shared import httpvalidationerror as shared_httpvalidationerror
from ..shared import openaqcitiesresult as shared_openaqcitiesresult


@dataclasses.dataclass
class CitiesGetv1V1CitiesGetQueryParams:
    city: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'city', 'style': 'form', 'explode': True }})
    country: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    country_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'country_id', 'style': 'form', 'explode': True }})
    entity: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'entity', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    order_by: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'order_by', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    sort: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CitiesGetv1V1CitiesGetRequest:
    query_params: CitiesGetv1V1CitiesGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class CitiesGetv1V1CitiesGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    open_aq_cities_result: Optional[shared_openaqcitiesresult.OpenAqCitiesResult] = dataclasses.field(default=None)
    
