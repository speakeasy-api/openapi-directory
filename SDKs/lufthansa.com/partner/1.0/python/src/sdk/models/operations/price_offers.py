import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class PriceOffersPathParams:
    destination: str = dataclasses.field(metadata={'path_param': { 'field_name': 'destination', 'style': 'simple', 'explode': False }})
    origin: str = dataclasses.field(metadata={'path_param': { 'field_name': 'origin', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PriceOffersQueryParams:
    departure_date: str = dataclasses.field(metadata={'query_param': { 'field_name': 'departureDate', 'style': 'form', 'explode': True }})
    return_date: str = dataclasses.field(metadata={'query_param': { 'field_name': 'returnDate', 'style': 'form', 'explode': True }})
    service: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'service', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PriceOffersSecurity:
    auth: shared_security.SchemeAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PriceOffersRequest:
    path_params: PriceOffersPathParams = dataclasses.field()
    query_params: PriceOffersQueryParams = dataclasses.field()
    security: PriceOffersSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PriceOffersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    price_offers_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
