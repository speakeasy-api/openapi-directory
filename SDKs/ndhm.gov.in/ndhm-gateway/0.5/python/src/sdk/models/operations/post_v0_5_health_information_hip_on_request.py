import dataclasses
from typing import Optional
from ..shared import hiphealthinformationrequestacknowledgement as shared_hiphealthinformationrequestacknowledgement
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class PostV05HealthInformationHipOnRequestHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_cm_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-CM-ID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostV05HealthInformationHipOnRequestRequests:
    application_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/xml' }})
    hip_health_information_request_acknowledgement: Optional[shared_hiphealthinformationrequestacknowledgement.HipHealthInformationRequestAcknowledgement] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostV05HealthInformationHipOnRequestRequest:
    headers: PostV05HealthInformationHipOnRequestHeaders = dataclasses.field()
    request: PostV05HealthInformationHipOnRequestRequests = dataclasses.field()
    

@dataclasses.dataclass
class PostV05HealthInformationHipOnRequestResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
