import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import oberrorresponse1 as shared_oberrorresponse1
from ..shared import obwritedomesticscheduledconsentresponse5 as shared_obwritedomesticscheduledconsentresponse5


@dataclasses.dataclass
class GetDomesticScheduledPaymentConsentsConsentIDPathParams:
    consent_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ConsentId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDomesticScheduledPaymentConsentsConsentIDHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_customer_user_agent: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-customer-user-agent', 'style': 'simple', 'explode': False }})
    x_fapi_auth_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-fapi-auth-date', 'style': 'simple', 'explode': False }})
    x_fapi_customer_ip_address: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-fapi-customer-ip-address', 'style': 'simple', 'explode': False }})
    x_fapi_interaction_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-fapi-interaction-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDomesticScheduledPaymentConsentsConsentIDSecurity:
    tppo_auth2_security: shared_security.SchemeTppoAuth2Security = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetDomesticScheduledPaymentConsentsConsentIDRequest:
    headers: GetDomesticScheduledPaymentConsentsConsentIDHeaders = dataclasses.field()
    path_params: GetDomesticScheduledPaymentConsentsConsentIDPathParams = dataclasses.field()
    security: GetDomesticScheduledPaymentConsentsConsentIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetDomesticScheduledPaymentConsentsConsentIDResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    ob_error_response1: Optional[shared_oberrorresponse1.ObErrorResponse1] = dataclasses.field(default=None)
    ob_write_domestic_scheduled_consent_response5: Optional[shared_obwritedomesticscheduledconsentresponse5.ObWriteDomesticScheduledConsentResponse5] = dataclasses.field(default=None)
    
