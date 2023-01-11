import dataclasses
from typing import Optional
from ..shared import errorresponse as shared_errorresponse
from ..shared import serviceprofileresponse as shared_serviceprofileresponse


@dataclasses.dataclass
class GetV05HiServicesServiceIDPathParams:
    service_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'service-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetV05HiServicesServiceIDHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetV05HiServicesServiceIDRequest:
    headers: GetV05HiServicesServiceIDHeaders = dataclasses.field()
    path_params: GetV05HiServicesServiceIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetV05HiServicesServiceIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    service_profile_response: Optional[shared_serviceprofileresponse.ServiceProfileResponse] = dataclasses.field(default=None)
    
