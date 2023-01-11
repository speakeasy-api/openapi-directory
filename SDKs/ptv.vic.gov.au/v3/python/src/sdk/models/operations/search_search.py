import dataclasses
from typing import Optional
from ..shared import v3_errorresponse as shared_v3_errorresponse
from ..shared import v3_searchresult as shared_v3_searchresult


@dataclasses.dataclass
class SearchSearchPathParams:
    search_term: str = dataclasses.field(metadata={'path_param': { 'field_name': 'search_term', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SearchSearchQueryParams:
    devid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'devid', 'style': 'form', 'explode': True }})
    include_addresses: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_addresses', 'style': 'form', 'explode': True }})
    include_outlets: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_outlets', 'style': 'form', 'explode': True }})
    latitude: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'latitude', 'style': 'form', 'explode': True }})
    longitude: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'longitude', 'style': 'form', 'explode': True }})
    match_route_by_suburb: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'match_route_by_suburb', 'style': 'form', 'explode': True }})
    match_stop_by_gtfs_stop_id: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'match_stop_by_gtfs_stop_id', 'style': 'form', 'explode': True }})
    match_stop_by_suburb: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'match_stop_by_suburb', 'style': 'form', 'explode': True }})
    max_distance: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'max_distance', 'style': 'form', 'explode': True }})
    route_types: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'route_types', 'style': 'form', 'explode': True }})
    signature: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'signature', 'style': 'form', 'explode': True }})
    token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SearchSearchRequest:
    path_params: SearchSearchPathParams = dataclasses.field()
    query_params: SearchSearchQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SearchSearchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    v3_error_response: Optional[shared_v3_errorresponse.V3ErrorResponse] = dataclasses.field(default=None)
    v3_search_result: Optional[shared_v3_searchresult.V3SearchResult] = dataclasses.field(default=None)
    
