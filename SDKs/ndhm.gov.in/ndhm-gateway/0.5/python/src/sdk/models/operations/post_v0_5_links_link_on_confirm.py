import dataclasses
from typing import Optional
from ..shared import patientlinkresult as shared_patientlinkresult
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class PostV05LinksLinkOnConfirmHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_cm_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-CM-ID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostV05LinksLinkOnConfirmRequests:
    application_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/xml' }})
    patient_link_result: Optional[shared_patientlinkresult.PatientLinkResult] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostV05LinksLinkOnConfirmRequest:
    headers: PostV05LinksLinkOnConfirmHeaders = dataclasses.field()
    request: PostV05LinksLinkOnConfirmRequests = dataclasses.field()
    

@dataclasses.dataclass
class PostV05LinksLinkOnConfirmResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
