import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetForecastTimeSeriesWrfPathParams:
    latitude: float = dataclasses.field(metadata={'path_param': { 'field_name': 'latitude', 'style': 'simple', 'explode': False }})
    longitude: float = dataclasses.field(metadata={'path_param': { 'field_name': 'longitude', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetForecastTimeSeriesWrfQueryParams:
    weather: str = dataclasses.field(metadata={'query_param': { 'field_name': 'weather', 'style': 'form', 'explode': True }})
    days: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'days', 'style': 'form', 'explode': True }})
    endtime: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endtime', 'style': 'form', 'explode': True }})
    entryid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'entryid', 'style': 'form', 'explode': True }})
    hours: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'hours', 'style': 'form', 'explode': True }})
    inittime: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'inittime', 'style': 'form', 'explode': True }})
    wave: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'wave', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetForecastTimeSeriesWrfRequest:
    path_params: GetForecastTimeSeriesWrfPathParams = dataclasses.field()
    query_params: GetForecastTimeSeriesWrfQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetForecastTimeSeriesWrfResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
