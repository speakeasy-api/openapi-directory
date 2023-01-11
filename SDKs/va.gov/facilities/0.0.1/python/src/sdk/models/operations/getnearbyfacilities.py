import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import apierror as shared_apierror
from ..shared import genericerror as shared_genericerror
from ..shared import nearbyresponse as shared_nearbyresponse


@dataclasses.dataclass
class GetNearbyFacilitiesQueryParams:
    city: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'city', 'style': 'form', 'explode': True }})
    drive_time: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'drive_time', 'style': 'form', 'explode': True }})
    lat: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lat', 'style': 'form', 'explode': True }})
    lng: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lng', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    services_: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'services[]', 'style': 'form', 'explode': True }})
    state: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    street_address: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'street_address', 'style': 'form', 'explode': True }})
    zip: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'zip', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetNearbyFacilitiesSecurity:
    apikey: shared_security.SchemeApikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetNearbyFacilitiesRequest:
    query_params: GetNearbyFacilitiesQueryParams = dataclasses.field()
    security: GetNearbyFacilitiesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetNearbyFacilitiesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    generic_error: Optional[shared_genericerror.GenericError] = dataclasses.field(default=None)
    nearby_response: Optional[shared_nearbyresponse.NearbyResponse] = dataclasses.field(default=None)
    
