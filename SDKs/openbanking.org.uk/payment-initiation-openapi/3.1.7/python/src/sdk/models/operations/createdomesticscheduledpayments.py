import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import obwritedomesticscheduled2 as shared_obwritedomesticscheduled2
from ..shared import security as shared_security
from ..shared import oberrorresponse1 as shared_oberrorresponse1
from ..shared import obwritedomesticscheduledresponse5 as shared_obwritedomesticscheduledresponse5


@dataclasses.dataclass
class CreateDomesticScheduledPaymentsHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_idempotency_key: str = dataclasses.field(metadata={'header': { 'field_name': 'x-idempotency-key', 'style': 'simple', 'explode': False }})
    x_jws_signature: str = dataclasses.field(metadata={'header': { 'field_name': 'x-jws-signature', 'style': 'simple', 'explode': False }})
    x_customer_user_agent: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-customer-user-agent', 'style': 'simple', 'explode': False }})
    x_fapi_auth_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-fapi-auth-date', 'style': 'simple', 'explode': False }})
    x_fapi_customer_ip_address: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-fapi-customer-ip-address', 'style': 'simple', 'explode': False }})
    x_fapi_interaction_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-fapi-interaction-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateDomesticScheduledPaymentsRequests:
    application_jose_plus_jwe: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/jose+jwe' }})
    ob_write_domestic_scheduled2: Optional[shared_obwritedomesticscheduled2.ObWriteDomesticScheduled2] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    ob_write_domestic_scheduled3: Optional[shared_obwritedomesticscheduled2.ObWriteDomesticScheduled2] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateDomesticScheduledPaymentsSecurity:
    psuo_auth2_security: shared_security.SchemePsuoAuth2Security = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreateDomesticScheduledPaymentsRequest:
    headers: CreateDomesticScheduledPaymentsHeaders = dataclasses.field()
    request: CreateDomesticScheduledPaymentsRequests = dataclasses.field()
    security: CreateDomesticScheduledPaymentsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateDomesticScheduledPaymentsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    ob_error_response1: Optional[shared_oberrorresponse1.ObErrorResponse1] = dataclasses.field(default=None)
    ob_write_domestic_scheduled_response5: Optional[shared_obwritedomesticscheduledresponse5.ObWriteDomesticScheduledResponse5] = dataclasses.field(default=None)
    
