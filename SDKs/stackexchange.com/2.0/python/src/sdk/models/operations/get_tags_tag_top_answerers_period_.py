import dataclasses
from typing import Optional
from enum import Enum

class GetTagsTagTopAnswerersPeriodPeriodEnum(str, Enum):
    ALL_TIME = "all_time"
    MONTH = "month"


@dataclasses.dataclass
class GetTagsTagTopAnswerersPeriodPathParams:
    period: GetTagsTagTopAnswerersPeriodPeriodEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'period', 'style': 'simple', 'explode': False }})
    tag: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tag', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTagsTagTopAnswerersPeriodQueryParams:
    site: str = dataclasses.field(metadata={'query_param': { 'field_name': 'site', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    pagesize: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pagesize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTagsTagTopAnswerersPeriodRequest:
    path_params: GetTagsTagTopAnswerersPeriodPathParams = dataclasses.field()
    query_params: GetTagsTagTopAnswerersPeriodQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTagsTagTopAnswerersPeriodResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
