import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import oberrorresponse1 as shared_oberrorresponse1
from ..shared import obreadconsentresponse1 as shared_obreadconsentresponse1


@dataclasses.dataclass
class GetAccountAccessConsentsConsentIDPathParams:
    consent_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'consentId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAccountAccessConsentsConsentIDHeaders:
    sandbox_id: str = dataclasses.field(metadata={'header': { 'field_name': 'sandbox-id', 'style': 'simple', 'explode': False }})
    x_customer_user_agent: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-customer-user-agent', 'style': 'simple', 'explode': False }})
    x_fapi_auth_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-fapi-auth-date', 'style': 'simple', 'explode': False }})
    x_fapi_customer_ip_address: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-fapi-customer-ip-address', 'style': 'simple', 'explode': False }})
    x_fapi_interaction_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-fapi-interaction-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAccountAccessConsentsConsentIDSecurity:
    client_credentials_token: shared_security.SchemeClientCredentialsToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    client_id: shared_security.SchemeClientID = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetAccountAccessConsentsConsentIDRequest:
    headers: GetAccountAccessConsentsConsentIDHeaders = dataclasses.field()
    path_params: GetAccountAccessConsentsConsentIDPathParams = dataclasses.field()
    security: GetAccountAccessConsentsConsentIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAccountAccessConsentsConsentIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    ob_error_response1: Optional[shared_oberrorresponse1.ObErrorResponse1] = dataclasses.field(default=None)
    ob_read_consent_response1: Optional[shared_obreadconsentresponse1.ObReadConsentResponse1] = dataclasses.field(default=None)
    
