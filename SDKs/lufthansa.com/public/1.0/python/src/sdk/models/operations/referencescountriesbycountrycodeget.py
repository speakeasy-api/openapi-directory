import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class ReferencesCountriesByCountryCodeGetPathParams:
    country_code: str = dataclasses.field(metadata={'path_param': { 'field_name': 'countryCode', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReferencesCountriesByCountryCodeGetQueryParams:
    lang: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ReferencesCountriesByCountryCodeGetHeaders:
    accept: str = dataclasses.field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReferencesCountriesByCountryCodeGetSecurity:
    auth: shared_security.SchemeAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ReferencesCountriesByCountryCodeGetRequest:
    headers: ReferencesCountriesByCountryCodeGetHeaders = dataclasses.field()
    path_params: ReferencesCountriesByCountryCodeGetPathParams = dataclasses.field()
    query_params: ReferencesCountriesByCountryCodeGetQueryParams = dataclasses.field()
    security: ReferencesCountriesByCountryCodeGetSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ReferencesCountriesByCountryCodeGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    references_countries_by_country_code_get_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
