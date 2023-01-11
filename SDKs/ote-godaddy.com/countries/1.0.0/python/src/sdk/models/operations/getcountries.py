import dataclasses
from typing import Any,Optional
from enum import Enum

class GetCountriesOrderEnum(str, Enum):
    ASCENDING = "ascending"
    DESCENDING = "descending"

class GetCountriesSortEnum(str, Enum):
    KEY = "key"
    LABEL = "label"


@dataclasses.dataclass
class GetCountriesQueryParams:
    market_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'marketId', 'style': 'form', 'explode': True }})
    order: Optional[GetCountriesOrderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    region_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'regionName', 'style': 'form', 'explode': True }})
    region_type_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'regionTypeId', 'style': 'form', 'explode': True }})
    sort: Optional[GetCountriesSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCountriesRequest:
    query_params: GetCountriesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCountriesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    array_of_country_summary: Optional[list[Any]] = dataclasses.field(default=None)
    error: Optional[Any] = dataclasses.field(default=None)
    error_limit: Optional[Any] = dataclasses.field(default=None)
    
