import dataclasses
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import apierror as shared_apierror
from ..shared import facilitiesidsresponse as shared_facilitiesidsresponse
from ..shared import genericerror as shared_genericerror

class GetFacilityIdsTypeEnum(str, Enum):
    HEALTH = "health"
    CEMETERY = "cemetery"
    BENEFITS = "benefits"
    VET_CENTER = "vet_center"


@dataclasses.dataclass
class GetFacilityIdsQueryParams:
    type: Optional[GetFacilityIdsTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetFacilityIdsSecurity:
    apikey: shared_security.SchemeApikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetFacilityIdsRequest:
    query_params: GetFacilityIdsQueryParams = dataclasses.field()
    security: GetFacilityIdsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetFacilityIdsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    facilities_ids_response: Optional[shared_facilitiesidsresponse.FacilitiesIdsResponse] = dataclasses.field(default=None)
    generic_error: Optional[shared_genericerror.GenericError] = dataclasses.field(default=None)
    
