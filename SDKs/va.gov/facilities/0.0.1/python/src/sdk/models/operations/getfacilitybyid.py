import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import apierror as shared_apierror
from ..shared import facilityreadresponse as shared_facilityreadresponse
from ..shared import genericerror as shared_genericerror
from ..shared import geofacilityreadresponse as shared_geofacilityreadresponse


@dataclasses.dataclass
class GetFacilityByIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetFacilityByIDSecurity:
    apikey: shared_security.SchemeApikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetFacilityByIDRequest:
    path_params: GetFacilityByIDPathParams = dataclasses.field()
    security: GetFacilityByIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetFacilityByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    facility_read_response: Optional[shared_facilityreadresponse.FacilityReadResponse] = dataclasses.field(default=None)
    generic_error: Optional[shared_genericerror.GenericError] = dataclasses.field(default=None)
    geo_facility_read_response: Optional[shared_geofacilityreadresponse.GeoFacilityReadResponse] = dataclasses.field(default=None)
    
