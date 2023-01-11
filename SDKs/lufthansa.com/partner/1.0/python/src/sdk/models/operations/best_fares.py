import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class BestFaresQueryParams:
    catalogues: str = dataclasses.field(metadata={'query_param': { 'field_name': 'catalogues', 'style': 'form', 'explode': True }})
    destination: str = dataclasses.field(metadata={'query_param': { 'field_name': 'destination', 'style': 'form', 'explode': True }})
    origin: str = dataclasses.field(metadata={'query_param': { 'field_name': 'origin', 'style': 'form', 'explode': True }})
    range: str = dataclasses.field(metadata={'query_param': { 'field_name': 'range', 'style': 'form', 'explode': True }})
    travel_date: str = dataclasses.field(metadata={'query_param': { 'field_name': 'travel-date', 'style': 'form', 'explode': True }})
    trip_duration: str = dataclasses.field(metadata={'query_param': { 'field_name': 'trip-duration', 'style': 'form', 'explode': True }})
    cabin_class: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cabin-class', 'style': 'form', 'explode': True }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    fare_family: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fare-family', 'style': 'form', 'explode': True }})
    trackingid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'trackingid', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class BestFaresHeaders:
    accept: str = dataclasses.field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class BestFaresSecurity:
    auth: shared_security.SchemeAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class BestFaresRequest:
    headers: BestFaresHeaders = dataclasses.field()
    query_params: BestFaresQueryParams = dataclasses.field()
    security: BestFaresSecurity = dataclasses.field()
    

@dataclasses.dataclass
class BestFaresResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    best_fares_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
