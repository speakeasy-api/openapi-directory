import dataclasses
from typing import Optional
from ..shared import nearearthobjectlist as shared_nearearthobjectlist


@dataclasses.dataclass
class RetrieveNeoFeedTodayQueryParams:
    detailed: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'detailed', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class RetrieveNeoFeedTodayRequest:
    query_params: RetrieveNeoFeedTodayQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class RetrieveNeoFeedTodayResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    near_earth_object_list: Optional[shared_nearearthobjectlist.NearEarthObjectList] = dataclasses.field(default=None)
    
