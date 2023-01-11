import dataclasses
from typing import Optional
from ..shared import patientcarecontextlinkrequest as shared_patientcarecontextlinkrequest
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class PostV05LinksLinkAddContextsHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_cm_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-CM-ID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostV05LinksLinkAddContextsRequests:
    application_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/xml' }})
    patient_care_context_link_request: Optional[shared_patientcarecontextlinkrequest.PatientCareContextLinkRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostV05LinksLinkAddContextsRequest:
    headers: PostV05LinksLinkAddContextsHeaders = dataclasses.field()
    request: PostV05LinksLinkAddContextsRequests = dataclasses.field()
    

@dataclasses.dataclass
class PostV05LinksLinkAddContextsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
