import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class AllFaresQueryParams:
    catalogues: str = dataclasses.field(metadata={'query_param': { 'field_name': 'catalogues', 'style': 'form', 'explode': True }})
    destination: str = dataclasses.field(metadata={'query_param': { 'field_name': 'destination', 'style': 'form', 'explode': True }})
    origin: str = dataclasses.field(metadata={'query_param': { 'field_name': 'origin', 'style': 'form', 'explode': True }})
    travel_date: str = dataclasses.field(metadata={'query_param': { 'field_name': 'travel-date', 'style': 'form', 'explode': True }})
    cabin_class: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cabin-class', 'style': 'form', 'explode': True }})
    fare_family: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fare-family', 'style': 'form', 'explode': True }})
    return_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'return-date', 'style': 'form', 'explode': True }})
    trackingid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'trackingid', 'style': 'form', 'explode': True }})
    travelers: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'travelers', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AllFaresHeaders:
    accept: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AllFaresSecurity:
    auth: shared_security.SchemeAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AllFaresRequest:
    headers: AllFaresHeaders = dataclasses.field()
    query_params: AllFaresQueryParams = dataclasses.field()
    security: AllFaresSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AllFaresResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    all_fares_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
