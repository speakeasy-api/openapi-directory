import dataclasses
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import apierror as shared_apierror
from ..shared import genericerror as shared_genericerror
from ..shared import geofacilitiesresponse as shared_geofacilitiesresponse

class GetAllFacilitiesAcceptEnum(str, Enum):
    APPLICATION_GEO_PLUS_JSON = "application/geo+json"
    APPLICATION_VND_GEO_PLUS_JSON = "application/vnd.geo+json"
    TEXT_CSV = "text/csv"


@dataclasses.dataclass
class GetAllFacilitiesHeaders:
    accept: GetAllFacilitiesAcceptEnum = dataclasses.field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAllFacilitiesSecurity:
    apikey: shared_security.SchemeApikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetAllFacilitiesRequest:
    headers: GetAllFacilitiesHeaders = dataclasses.field()
    security: GetAllFacilitiesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAllFacilitiesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    generic_error: Optional[shared_genericerror.GenericError] = dataclasses.field(default=None)
    geo_facilities_response: Optional[shared_geofacilitiesresponse.GeoFacilitiesResponse] = dataclasses.field(default=None)
    get_all_facilities_200_text_csv_string: Optional[str] = dataclasses.field(default=None)
    
