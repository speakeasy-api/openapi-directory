import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class LhDeepLinksFfpQueryParams:
    catalogues: str = dataclasses.field(metadata={'query_param': { 'field_name': 'catalogues', 'style': 'form', 'explode': True }})
    country: str = dataclasses.field(metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    destination: str = dataclasses.field(metadata={'query_param': { 'field_name': 'destination', 'style': 'form', 'explode': True }})
    lang: str = dataclasses.field(metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    origin: str = dataclasses.field(metadata={'query_param': { 'field_name': 'origin', 'style': 'form', 'explode': True }})
    trackingid: str = dataclasses.field(metadata={'query_param': { 'field_name': 'trackingid', 'style': 'form', 'explode': True }})
    travel_date: str = dataclasses.field(metadata={'query_param': { 'field_name': 'travel-date', 'style': 'form', 'explode': True }})
    cabin_class: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cabin-class', 'style': 'form', 'explode': True }})
    encryption_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'encryption-key', 'style': 'form', 'explode': True }})
    partnerid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'partnerid', 'style': 'form', 'explode': True }})
    return_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'return-date', 'style': 'form', 'explode': True }})
    travelers: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'travelers', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class LhDeepLinksFfpHeaders:
    accept: str = dataclasses.field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class LhDeepLinksFfpSecurity:
    auth: shared_security.SchemeAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class LhDeepLinksFfpRequest:
    headers: LhDeepLinksFfpHeaders = dataclasses.field()
    query_params: LhDeepLinksFfpQueryParams = dataclasses.field()
    security: LhDeepLinksFfpSecurity = dataclasses.field()
    

@dataclasses.dataclass
class LhDeepLinksFfpResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    lh_deep_links_ffp_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
