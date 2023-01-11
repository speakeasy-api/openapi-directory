import dataclasses
from typing import Optional
from ..shared import patientdiscoveryresult as shared_patientdiscoveryresult
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class PostV05CareContextsOnDiscoverHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostV05CareContextsOnDiscoverRequests:
    application_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/xml' }})
    patient_discovery_result: Optional[shared_patientdiscoveryresult.PatientDiscoveryResult] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostV05CareContextsOnDiscoverRequest:
    headers: PostV05CareContextsOnDiscoverHeaders = dataclasses.field()
    request: PostV05CareContextsOnDiscoverRequests = dataclasses.field()
    

@dataclasses.dataclass
class PostV05CareContextsOnDiscoverResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
