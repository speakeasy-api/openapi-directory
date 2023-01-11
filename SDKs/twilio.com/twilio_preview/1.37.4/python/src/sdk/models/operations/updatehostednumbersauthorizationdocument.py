import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import authorization_document_enum_status_enum as shared_authorization_document_enum_status_enum
from ..shared import security as shared_security
from ..shared import preview_hosted_numbers_authorization_document as shared_preview_hosted_numbers_authorization_document


UPDATE_HOSTED_NUMBERS_AUTHORIZATION_DOCUMENT_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class UpdateHostedNumbersAuthorizationDocumentPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateHostedNumbersAuthorizationDocumentUpdateHostedNumbersAuthorizationDocumentRequest:
    address_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AddressSid' }})
    cc_emails: Optional[list[str]] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CcEmails' }})
    contact_phone_number: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ContactPhoneNumber' }})
    contact_title: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ContactTitle' }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Email' }})
    hosted_number_order_sids: Optional[list[str]] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'HostedNumberOrderSids' }})
    status: Optional[shared_authorization_document_enum_status_enum.AuthorizationDocumentEnumStatusEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Status' }})
    

@dataclasses.dataclass
class UpdateHostedNumbersAuthorizationDocumentSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateHostedNumbersAuthorizationDocumentRequest:
    path_params: UpdateHostedNumbersAuthorizationDocumentPathParams = dataclasses.field()
    security: UpdateHostedNumbersAuthorizationDocumentSecurity = dataclasses.field()
    request: Optional[UpdateHostedNumbersAuthorizationDocumentUpdateHostedNumbersAuthorizationDocumentRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateHostedNumbersAuthorizationDocumentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_hosted_numbers_authorization_document: Optional[shared_preview_hosted_numbers_authorization_document.PreviewHostedNumbersAuthorizationDocument] = dataclasses.field(default=None)
    
