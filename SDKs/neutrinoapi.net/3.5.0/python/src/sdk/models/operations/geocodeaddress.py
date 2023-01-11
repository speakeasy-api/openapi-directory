import dataclasses
from typing import Optional
from enum import Enum
from ..shared import apierror as shared_apierror
from ..shared import geocodeaddressresponse as shared_geocodeaddressresponse

class GeocodeAddressRequestBodyOutputCaseEnum(str, Enum):
    CAMEL = "camel"


@dataclasses.dataclass
class GeocodeAddressRequestBody:
    address: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'address' }})
    city: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'city' }})
    country_code: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'country-code' }})
    county: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'county' }})
    fuzzy_search: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'fuzzy-search' }})
    house_number: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'house-number' }})
    language_code: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'language-code' }})
    output_case: Optional[GeocodeAddressRequestBodyOutputCaseEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'output-case' }})
    postal_code: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'postal-code' }})
    state: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'state' }})
    street: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'street' }})
    

@dataclasses.dataclass
class GeocodeAddressRequest:
    request: Optional[GeocodeAddressRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class GeocodeAddressResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    geocode_address_response: Optional[shared_geocodeaddressresponse.GeocodeAddressResponse] = dataclasses.field(default=None)
    
