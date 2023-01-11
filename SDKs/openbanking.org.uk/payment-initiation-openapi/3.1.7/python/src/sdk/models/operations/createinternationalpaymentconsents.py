import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import obwriteinternationalconsent5 as shared_obwriteinternationalconsent5
from ..shared import security as shared_security
from ..shared import oberrorresponse1 as shared_oberrorresponse1
from ..shared import obwriteinternationalconsentresponse6 as shared_obwriteinternationalconsentresponse6


@dataclasses.dataclass
class CreateInternationalPaymentConsentsHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_idempotency_key: str = dataclasses.field(metadata={'header': { 'field_name': 'x-idempotency-key', 'style': 'simple', 'explode': False }})
    x_jws_signature: str = dataclasses.field(metadata={'header': { 'field_name': 'x-jws-signature', 'style': 'simple', 'explode': False }})
    x_customer_user_agent: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-customer-user-agent', 'style': 'simple', 'explode': False }})
    x_fapi_auth_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-fapi-auth-date', 'style': 'simple', 'explode': False }})
    x_fapi_customer_ip_address: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-fapi-customer-ip-address', 'style': 'simple', 'explode': False }})
    x_fapi_interaction_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-fapi-interaction-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateInternationalPaymentConsentsRequests:
    application_jose_plus_jwe: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/jose+jwe' }})
    ob_write_international_consent5: Optional[shared_obwriteinternationalconsent5.ObWriteInternationalConsent5] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    ob_write_international_consent6: Optional[shared_obwriteinternationalconsent5.ObWriteInternationalConsent5] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateInternationalPaymentConsentsSecurity:
    tppo_auth2_security: shared_security.SchemeTppoAuth2Security = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreateInternationalPaymentConsentsRequest:
    headers: CreateInternationalPaymentConsentsHeaders = dataclasses.field()
    request: CreateInternationalPaymentConsentsRequests = dataclasses.field()
    security: CreateInternationalPaymentConsentsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateInternationalPaymentConsentsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    ob_error_response1: Optional[shared_oberrorresponse1.ObErrorResponse1] = dataclasses.field(default=None)
    ob_write_international_consent_response6: Optional[shared_obwriteinternationalconsentresponse6.ObWriteInternationalConsentResponse6] = dataclasses.field(default=None)
    
