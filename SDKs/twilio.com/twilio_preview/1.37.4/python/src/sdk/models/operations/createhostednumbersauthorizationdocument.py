import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import preview_hosted_numbers_authorization_document as shared_preview_hosted_numbers_authorization_document


CREATE_HOSTED_NUMBERS_AUTHORIZATION_DOCUMENT_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class CreateHostedNumbersAuthorizationDocumentCreateHostedNumbersAuthorizationDocumentRequest:
    address_sid: str = dataclasses.field(metadata={'form': { 'field_name': 'AddressSid' }})
    contact_phone_number: str = dataclasses.field(metadata={'form': { 'field_name': 'ContactPhoneNumber' }})
    contact_title: str = dataclasses.field(metadata={'form': { 'field_name': 'ContactTitle' }})
    email: str = dataclasses.field(metadata={'form': { 'field_name': 'Email' }})
    hosted_number_order_sids: list[str] = dataclasses.field(metadata={'form': { 'field_name': 'HostedNumberOrderSids' }})
    cc_emails: Optional[list[str]] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CcEmails' }})
    

@dataclasses.dataclass
class CreateHostedNumbersAuthorizationDocumentSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateHostedNumbersAuthorizationDocumentRequest:
    security: CreateHostedNumbersAuthorizationDocumentSecurity = dataclasses.field()
    request: Optional[CreateHostedNumbersAuthorizationDocumentCreateHostedNumbersAuthorizationDocumentRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateHostedNumbersAuthorizationDocumentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_hosted_numbers_authorization_document: Optional[shared_preview_hosted_numbers_authorization_document.PreviewHostedNumbersAuthorizationDocument] = dataclasses.field(default=None)
    
