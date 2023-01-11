import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import forecast as shared_forecast


@dataclasses.dataclass
class GetForecastQueryParams:
    lat: float = dataclasses.field(metadata={'query_param': { 'field_name': 'lat', 'style': 'form', 'explode': True }})
    lng: float = dataclasses.field(metadata={'query_param': { 'field_name': 'lng', 'style': 'form', 'explode': True }})
    alt: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    dt: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'dt', 'style': 'form', 'explode': True }})
    ozone: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ozone', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetForecastHeaders:
    x_access_token: str = dataclasses.field(metadata={'header': { 'field_name': 'x-access-token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetForecastRequest:
    headers: GetForecastHeaders = dataclasses.field()
    query_params: GetForecastQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetForecastResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    forecast_results: Optional[list[list[shared_forecast.Forecast]]] = dataclasses.field(default=None)
    
