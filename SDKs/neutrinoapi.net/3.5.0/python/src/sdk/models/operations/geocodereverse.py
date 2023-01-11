import dataclasses
from typing import Optional
from enum import Enum
from ..shared import apierror as shared_apierror
from ..shared import geocodereverseresponse as shared_geocodereverseresponse

class GeocodeReverseRequestBodyOutputCaseEnum(str, Enum):
    CAMEL = "camel"


@dataclasses.dataclass
class GeocodeReverseRequestBody:
    latitude: str = dataclasses.field(metadata={'form': { 'field_name': 'latitude' }})
    longitude: str = dataclasses.field(metadata={'form': { 'field_name': 'longitude' }})
    language_code: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'language-code' }})
    output_case: Optional[GeocodeReverseRequestBodyOutputCaseEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'output-case' }})
    zoom: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'zoom' }})
    

@dataclasses.dataclass
class GeocodeReverseRequest:
    request: Optional[GeocodeReverseRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class GeocodeReverseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    geocode_reverse_response: Optional[shared_geocodereverseresponse.GeocodeReverseResponse] = dataclasses.field(default=None)
    
