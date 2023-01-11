import dataclasses
from typing import Optional
from ..shared import nearearthobject as shared_nearearthobject


@dataclasses.dataclass
class BrowseNearEarthObjectsQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'size', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class BrowseNearEarthObjectsRequest:
    query_params: BrowseNearEarthObjectsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class BrowseNearEarthObjectsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    near_earth_object: Optional[shared_nearearthobject.NearEarthObject] = dataclasses.field(default=None)
    
