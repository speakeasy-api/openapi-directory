import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class OffersLoungesByLocationGetPathParams:
    location: str = dataclasses.field(metadata={'path_param': { 'field_name': 'location', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OffersLoungesByLocationGetQueryParams:
    cabin_class: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cabinClass', 'style': 'form', 'explode': True }})
    lang: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    tier_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tierCode', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class OffersLoungesByLocationGetHeaders:
    accept: str = dataclasses.field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OffersLoungesByLocationGetSecurity:
    auth: shared_security.SchemeAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class OffersLoungesByLocationGetRequest:
    headers: OffersLoungesByLocationGetHeaders = dataclasses.field()
    path_params: OffersLoungesByLocationGetPathParams = dataclasses.field()
    query_params: OffersLoungesByLocationGetQueryParams = dataclasses.field()
    security: OffersLoungesByLocationGetSecurity = dataclasses.field()
    

@dataclasses.dataclass
class OffersLoungesByLocationGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    offers_lounges_by_location_get_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
