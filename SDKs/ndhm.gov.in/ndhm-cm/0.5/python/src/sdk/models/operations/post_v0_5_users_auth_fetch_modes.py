import dataclasses
from typing import Optional
from ..shared import patientauthmodequeryrequest as shared_patientauthmodequeryrequest
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class PostV05UsersAuthFetchModesHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostV05UsersAuthFetchModesRequests:
    application_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/xml' }})
    patient_auth_mode_query_request: Optional[shared_patientauthmodequeryrequest.PatientAuthModeQueryRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostV05UsersAuthFetchModesRequest:
    headers: PostV05UsersAuthFetchModesHeaders = dataclasses.field()
    request: PostV05UsersAuthFetchModesRequests = dataclasses.field()
    

@dataclasses.dataclass
class PostV05UsersAuthFetchModesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
