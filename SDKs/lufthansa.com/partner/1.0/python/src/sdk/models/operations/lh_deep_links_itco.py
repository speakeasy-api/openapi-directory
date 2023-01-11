import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class LhDeepLinksItcoQueryParams:
    catalogues: str = dataclasses.field(metadata={'query_param': { 'field_name': 'catalogues', 'style': 'form', 'explode': True }})
    country: str = dataclasses.field(metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    destination: str = dataclasses.field(metadata={'query_param': { 'field_name': 'destination', 'style': 'form', 'explode': True }})
    fare: str = dataclasses.field(metadata={'query_param': { 'field_name': 'fare', 'style': 'form', 'explode': True }})
    fare_currency: str = dataclasses.field(metadata={'query_param': { 'field_name': 'fare-currency', 'style': 'form', 'explode': True }})
    lang: str = dataclasses.field(metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    origin: str = dataclasses.field(metadata={'query_param': { 'field_name': 'origin', 'style': 'form', 'explode': True }})
    outbound_segments: str = dataclasses.field(metadata={'query_param': { 'field_name': 'outbound-segments', 'style': 'form', 'explode': True }})
    trackingid: str = dataclasses.field(metadata={'query_param': { 'field_name': 'trackingid', 'style': 'form', 'explode': True }})
    travel_date: str = dataclasses.field(metadata={'query_param': { 'field_name': 'travel-date', 'style': 'form', 'explode': True }})
    cabin_class: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cabin-class', 'style': 'form', 'explode': True }})
    encryption_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'encryption-key', 'style': 'form', 'explode': True }})
    net_fare: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'net-fare', 'style': 'form', 'explode': True }})
    partnerid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'partnerid', 'style': 'form', 'explode': True }})
    return_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'return-date', 'style': 'form', 'explode': True }})
    return_segments: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'return-segments', 'style': 'form', 'explode': True }})
    travelers: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'travelers', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class LhDeepLinksItcoHeaders:
    accept: str = dataclasses.field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class LhDeepLinksItcoSecurity:
    auth: shared_security.SchemeAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class LhDeepLinksItcoRequest:
    headers: LhDeepLinksItcoHeaders = dataclasses.field()
    query_params: LhDeepLinksItcoQueryParams = dataclasses.field()
    security: LhDeepLinksItcoSecurity = dataclasses.field()
    

@dataclasses.dataclass
class LhDeepLinksItcoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    lh_deep_links_itco_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
