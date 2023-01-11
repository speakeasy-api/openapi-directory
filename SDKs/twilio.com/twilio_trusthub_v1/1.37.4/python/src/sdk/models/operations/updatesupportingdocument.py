import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import trusthub_v1_supporting_document as shared_trusthub_v1_supporting_document


UPDATE_SUPPORTING_DOCUMENT_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclasses.dataclass
class UpdateSupportingDocumentPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateSupportingDocumentUpdateSupportingDocumentRequest:
    attributes: Optional[Any] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Attributes' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclasses.dataclass
class UpdateSupportingDocumentSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateSupportingDocumentRequest:
    path_params: UpdateSupportingDocumentPathParams = dataclasses.field()
    security: UpdateSupportingDocumentSecurity = dataclasses.field()
    request: Optional[UpdateSupportingDocumentUpdateSupportingDocumentRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateSupportingDocumentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    trusthub_v1_supporting_document: Optional[shared_trusthub_v1_supporting_document.TrusthubV1SupportingDocument] = dataclasses.field(default=None)
    
