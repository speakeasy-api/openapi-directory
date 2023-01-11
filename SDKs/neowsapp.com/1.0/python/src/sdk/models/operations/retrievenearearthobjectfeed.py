import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import nearearthobjectlist as shared_nearearthobjectlist


@dataclasses.dataclass
class RetrieveNearEarthObjectFeedQueryParams:
    detailed: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'detailed', 'style': 'form', 'explode': True }})
    end_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'end_date', 'style': 'form', 'explode': True }})
    start_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start_date', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class RetrieveNearEarthObjectFeedRequest:
    query_params: RetrieveNearEarthObjectFeedQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class RetrieveNearEarthObjectFeedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    near_earth_object_list: Optional[shared_nearearthobjectlist.NearEarthObjectList] = dataclasses.field(default=None)
    
