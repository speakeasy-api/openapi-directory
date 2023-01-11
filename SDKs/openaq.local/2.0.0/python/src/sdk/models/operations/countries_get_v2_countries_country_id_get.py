import dataclasses
from typing import Any,Optional
from ..shared import httpvalidationerror as shared_httpvalidationerror
from ..shared import openaqcountriesresult as shared_openaqcountriesresult


@dataclasses.dataclass
class CountriesGetV2CountriesCountryIDGetPathParams:
    country_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'country_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CountriesGetV2CountriesCountryIDGetQueryParams:
    country: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    order_by: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'order_by', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    sort: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CountriesGetV2CountriesCountryIDGetRequest:
    path_params: CountriesGetV2CountriesCountryIDGetPathParams = dataclasses.field()
    query_params: CountriesGetV2CountriesCountryIDGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class CountriesGetV2CountriesCountryIDGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    open_aq_countries_result: Optional[shared_openaqcountriesresult.OpenAqCountriesResult] = dataclasses.field(default=None)
    
