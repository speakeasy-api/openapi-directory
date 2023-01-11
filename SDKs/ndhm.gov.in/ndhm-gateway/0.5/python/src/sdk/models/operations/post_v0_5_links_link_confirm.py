import dataclasses
from typing import Optional
from ..shared import linkconfirmationrequest as shared_linkconfirmationrequest
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class PostV05LinksLinkConfirmHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_hip_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-HIP-ID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostV05LinksLinkConfirmRequests:
    application_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/xml' }})
    link_confirmation_request: Optional[shared_linkconfirmationrequest.LinkConfirmationRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostV05LinksLinkConfirmRequest:
    headers: PostV05LinksLinkConfirmHeaders = dataclasses.field()
    request: PostV05LinksLinkConfirmRequests = dataclasses.field()
    

@dataclasses.dataclass
class PostV05LinksLinkConfirmResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
