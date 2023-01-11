import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import security as shared_security

class GetUpdatedVideosSortEnum(str, Enum):
    NEWEST = "newest"
    OLDEST = "oldest"


@dataclasses.dataclass
class GetUpdatedVideosQueryParams:
    end_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'end_date', 'style': 'form', 'explode': True }})
    interval: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'interval', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[GetUpdatedVideosSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    start_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start_date', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetUpdatedVideosSecurity:
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    customer_access_code: Optional[shared_security.SchemeCustomerAccessCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetUpdatedVideosRequest:
    query_params: GetUpdatedVideosQueryParams = dataclasses.field()
    security: GetUpdatedVideosSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetUpdatedVideosResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    updated_media_data_list: Optional[Any] = dataclasses.field(default=None)
    
