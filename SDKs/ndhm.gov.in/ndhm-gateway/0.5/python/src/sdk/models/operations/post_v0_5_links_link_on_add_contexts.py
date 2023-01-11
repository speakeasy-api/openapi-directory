import dataclasses
from typing import Optional
from ..shared import patientcarecontextlinkresponse as shared_patientcarecontextlinkresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class PostV05LinksLinkOnAddContextsHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_hip_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-HIP-ID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostV05LinksLinkOnAddContextsRequests:
    application_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/xml' }})
    patient_care_context_link_response: Optional[shared_patientcarecontextlinkresponse.PatientCareContextLinkResponse] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostV05LinksLinkOnAddContextsRequest:
    headers: PostV05LinksLinkOnAddContextsHeaders = dataclasses.field()
    request: PostV05LinksLinkOnAddContextsRequests = dataclasses.field()
    

@dataclasses.dataclass
class PostV05LinksLinkOnAddContextsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
