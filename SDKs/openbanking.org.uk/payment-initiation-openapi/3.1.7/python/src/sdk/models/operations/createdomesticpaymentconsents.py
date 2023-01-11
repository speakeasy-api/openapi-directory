import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import obwritedomesticconsent4 as shared_obwritedomesticconsent4
from ..shared import security as shared_security
from ..shared import oberrorresponse1 as shared_oberrorresponse1
from ..shared import obwritedomesticconsentresponse5 as shared_obwritedomesticconsentresponse5


@dataclasses.dataclass
class CreateDomesticPaymentConsentsHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_idempotency_key: str = dataclasses.field(metadata={'header': { 'field_name': 'x-idempotency-key', 'style': 'simple', 'explode': False }})
    x_jws_signature: str = dataclasses.field(metadata={'header': { 'field_name': 'x-jws-signature', 'style': 'simple', 'explode': False }})
    x_customer_user_agent: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-customer-user-agent', 'style': 'simple', 'explode': False }})
    x_fapi_auth_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-fapi-auth-date', 'style': 'simple', 'explode': False }})
    x_fapi_customer_ip_address: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-fapi-customer-ip-address', 'style': 'simple', 'explode': False }})
    x_fapi_interaction_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-fapi-interaction-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateDomesticPaymentConsentsRequests:
    application_jose_plus_jwe: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/jose+jwe' }})
    ob_write_domestic_consent4: Optional[shared_obwritedomesticconsent4.ObWriteDomesticConsent4] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    ob_write_domestic_consent5: Optional[shared_obwritedomesticconsent4.ObWriteDomesticConsent4] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateDomesticPaymentConsentsSecurity:
    tppo_auth2_security: shared_security.SchemeTppoAuth2Security = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreateDomesticPaymentConsentsRequest:
    headers: CreateDomesticPaymentConsentsHeaders = dataclasses.field()
    request: CreateDomesticPaymentConsentsRequests = dataclasses.field()
    security: CreateDomesticPaymentConsentsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateDomesticPaymentConsentsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    ob_error_response1: Optional[shared_oberrorresponse1.ObErrorResponse1] = dataclasses.field(default=None)
    ob_write_domestic_consent_response5: Optional[shared_obwritedomesticconsentresponse5.ObWriteDomesticConsentResponse5] = dataclasses.field(default=None)
    
