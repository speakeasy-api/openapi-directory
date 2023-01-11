import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import obfundsconfirmation1 as shared_obfundsconfirmation1
from ..shared import oberrorresponse1 as shared_oberrorresponse1
from ..shared import obfundsconfirmationresponse1 as shared_obfundsconfirmationresponse1


@dataclasses.dataclass
class CreateFundsConfirmationsHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_customer_user_agent: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-customer-user-agent', 'style': 'simple', 'explode': False }})
    x_fapi_auth_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-fapi-auth-date', 'style': 'simple', 'explode': False }})
    x_fapi_customer_ip_address: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-fapi-customer-ip-address', 'style': 'simple', 'explode': False }})
    x_fapi_interaction_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-fapi-interaction-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateFundsConfirmationsSecurity:
    psuo_auth2_security: shared_security.SchemePsuoAuth2Security = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreateFundsConfirmationsRequest:
    headers: CreateFundsConfirmationsHeaders = dataclasses.field()
    request: shared_obfundsconfirmation1.ObFundsConfirmation1 = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateFundsConfirmationsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateFundsConfirmationsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    ob_error_response1: Optional[shared_oberrorresponse1.ObErrorResponse1] = dataclasses.field(default=None)
    ob_funds_confirmation_response1: Optional[shared_obfundsconfirmationresponse1.ObFundsConfirmationResponse1] = dataclasses.field(default=None)
    
