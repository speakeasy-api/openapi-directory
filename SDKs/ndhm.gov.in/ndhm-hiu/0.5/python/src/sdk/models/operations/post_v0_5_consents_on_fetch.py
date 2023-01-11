import dataclasses
from typing import Optional
from ..shared import consentartefactresponse as shared_consentartefactresponse
from ..shared import errorresponse as shared_errorresponse


POST_V0_5_CONSENTS_ON_FETCH_SERVERS = [
	"https://dev.ndhm.gov.in/hiu",
]


@dataclasses.dataclass
class PostV05ConsentsOnFetchHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_hiu_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-HIU-ID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostV05ConsentsOnFetchRequests:
    application_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/xml' }})
    consent_artefact_response: Optional[shared_consentartefactresponse.ConsentArtefactResponse] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostV05ConsentsOnFetchRequest:
    headers: PostV05ConsentsOnFetchHeaders = dataclasses.field()
    request: PostV05ConsentsOnFetchRequests = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PostV05ConsentsOnFetchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
