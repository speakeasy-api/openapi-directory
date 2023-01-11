import dataclasses
from typing import Optional
from ..shared import hiuhealthinformationrequestresponse as shared_hiuhealthinformationrequestresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class PostV05HealthInformationCmOnRequestHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_hiu_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-HIU-ID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostV05HealthInformationCmOnRequestRequests:
    application_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/xml' }})
    hiu_health_information_request_response: Optional[shared_hiuhealthinformationrequestresponse.HiuHealthInformationRequestResponse] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostV05HealthInformationCmOnRequestRequest:
    headers: PostV05HealthInformationCmOnRequestHeaders = dataclasses.field()
    request: PostV05HealthInformationCmOnRequestRequests = dataclasses.field()
    

@dataclasses.dataclass
class PostV05HealthInformationCmOnRequestResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
