import dataclasses
from typing import Optional
from ..shared import shareprofileresult as shared_shareprofileresult
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class PostV05PatientsProfileOnShareHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_cm_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-CM-ID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostV05PatientsProfileOnShareRequests:
    application_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/xml' }})
    share_profile_result: Optional[shared_shareprofileresult.ShareProfileResult] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostV05PatientsProfileOnShareRequest:
    headers: PostV05PatientsProfileOnShareHeaders = dataclasses.field()
    request: PostV05PatientsProfileOnShareRequests = dataclasses.field()
    

@dataclasses.dataclass
class PostV05PatientsProfileOnShareResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
