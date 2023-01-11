import dataclasses
from typing import Optional
from ..shared import patientauthmodequeryresponse as shared_patientauthmodequeryresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class PostV05UsersAuthOnFetchModesHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_hip_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-HIP-ID', 'style': 'simple', 'explode': False }})
    x_hiu_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-HIU-ID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostV05UsersAuthOnFetchModesRequests:
    application_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/xml' }})
    patient_auth_mode_query_response: Optional[shared_patientauthmodequeryresponse.PatientAuthModeQueryResponse] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostV05UsersAuthOnFetchModesRequest:
    headers: PostV05UsersAuthOnFetchModesHeaders = dataclasses.field()
    request: PostV05UsersAuthOnFetchModesRequests = dataclasses.field()
    

@dataclasses.dataclass
class PostV05UsersAuthOnFetchModesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
