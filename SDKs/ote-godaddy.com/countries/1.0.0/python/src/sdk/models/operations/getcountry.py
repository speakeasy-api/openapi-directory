import dataclasses
from typing import Any,Optional
from enum import Enum


@dataclasses.dataclass
class GetCountryPathParams:
    country_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'countryKey', 'style': 'simple', 'explode': False }})
    
class GetCountryOrderEnum(str, Enum):
    ASCENDING = "ascending"
    DESCENDING = "descending"

class GetCountrySortEnum(str, Enum):
    KEY = "key"
    LABEL = "label"


@dataclasses.dataclass
class GetCountryQueryParams:
    market_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'marketId', 'style': 'form', 'explode': True }})
    order: Optional[GetCountryOrderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    sort: Optional[GetCountrySortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCountryRequest:
    path_params: GetCountryPathParams = dataclasses.field()
    query_params: GetCountryQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCountryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    array_of_country: Optional[list[Any]] = dataclasses.field(default=None)
    error: Optional[Any] = dataclasses.field(default=None)
    error_limit: Optional[Any] = dataclasses.field(default=None)
    
