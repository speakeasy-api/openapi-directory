import dataclasses
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import apierror as shared_apierror
from ..shared import facilitiesresponse as shared_facilitiesresponse
from ..shared import genericerror as shared_genericerror
from ..shared import geofacilitiesresponse as shared_geofacilitiesresponse

class GetFacilitiesByLocationTypeEnum(str, Enum):
    HEALTH = "health"
    CEMETERY = "cemetery"
    BENEFITS = "benefits"
    VET_CENTER = "vet_center"


@dataclasses.dataclass
class GetFacilitiesByLocationQueryParams:
    bbox_: Optional[list[float]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'bbox[]', 'style': 'form', 'explode': True }})
    ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    lat: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lat', 'style': 'form', 'explode': True }})
    long: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'long', 'style': 'form', 'explode': True }})
    mobile: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'mobile', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    services_: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'services[]', 'style': 'form', 'explode': True }})
    state: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    type: Optional[GetFacilitiesByLocationTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    visn: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'visn', 'style': 'form', 'explode': True }})
    zip: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'zip', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetFacilitiesByLocationSecurity:
    apikey: shared_security.SchemeApikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetFacilitiesByLocationRequest:
    query_params: GetFacilitiesByLocationQueryParams = dataclasses.field()
    security: GetFacilitiesByLocationSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetFacilitiesByLocationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    facilities_response: Optional[shared_facilitiesresponse.FacilitiesResponse] = dataclasses.field(default=None)
    generic_error: Optional[shared_genericerror.GenericError] = dataclasses.field(default=None)
    geo_facilities_response: Optional[shared_geofacilitiesresponse.GeoFacilitiesResponse] = dataclasses.field(default=None)
    
