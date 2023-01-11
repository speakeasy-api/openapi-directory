import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import preview_sync_service_document as shared_preview_sync_service_document


UPDATE_SYNC_DOCUMENT_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class UpdateSyncDocumentPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateSyncDocumentHeaders:
    if_match: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Match', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateSyncDocumentUpdateSyncDocumentRequest:
    data: Any = dataclasses.field(metadata={'form': { 'field_name': 'Data' }})
    

@dataclasses.dataclass
class UpdateSyncDocumentSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateSyncDocumentRequest:
    headers: UpdateSyncDocumentHeaders = dataclasses.field()
    path_params: UpdateSyncDocumentPathParams = dataclasses.field()
    security: UpdateSyncDocumentSecurity = dataclasses.field()
    request: Optional[UpdateSyncDocumentUpdateSyncDocumentRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateSyncDocumentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_sync_service_document: Optional[shared_preview_sync_service_document.PreviewSyncServiceDocument] = dataclasses.field(default=None)
    
