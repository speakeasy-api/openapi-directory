import dataclasses
from typing import Optional
from enum import Enum

class GetStatsSeriesPeriodFieldsPeriodEnum(str, Enum):
    DAY = "day"
    MONTH = "month"


@dataclasses.dataclass
class GetStatsSeriesPeriodFieldsPathParams:
    fields: str = dataclasses.field(metadata={'path_param': { 'field_name': 'fields', 'style': 'simple', 'explode': False }})
    period: GetStatsSeriesPeriodFieldsPeriodEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'period', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetStatsSeriesPeriodFieldsQueryParams:
    end: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'end', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetStatsSeriesPeriodFieldsRequest:
    path_params: GetStatsSeriesPeriodFieldsPathParams = dataclasses.field()
    query_params: GetStatsSeriesPeriodFieldsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetStatsSeriesPeriodFieldsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
