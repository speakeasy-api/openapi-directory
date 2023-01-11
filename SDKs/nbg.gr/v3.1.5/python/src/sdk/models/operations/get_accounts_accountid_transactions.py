import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import oberrorresponse1 as shared_oberrorresponse1
from ..shared import obreadtransaction6 as shared_obreadtransaction6


@dataclasses.dataclass
class GetAccountsAccountIDTransactionsPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAccountsAccountIDTransactionsQueryParams:
    from_booking_date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fromBookingDateTime', 'style': 'form', 'explode': True }})
    to_booking_date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'toBookingDateTime', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAccountsAccountIDTransactionsHeaders:
    sandbox_id: str = dataclasses.field(metadata={'header': { 'field_name': 'sandbox-id', 'style': 'simple', 'explode': False }})
    x_customer_user_agent: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-customer-user-agent', 'style': 'simple', 'explode': False }})
    x_fapi_auth_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-fapi-auth-date', 'style': 'simple', 'explode': False }})
    x_fapi_customer_ip_address: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-fapi-customer-ip-address', 'style': 'simple', 'explode': False }})
    x_fapi_interaction_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-fapi-interaction-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAccountsAccountIDTransactionsSecurity:
    authorization_code_token: shared_security.SchemeAuthorizationCodeToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    client_id: shared_security.SchemeClientID = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetAccountsAccountIDTransactionsRequest:
    headers: GetAccountsAccountIDTransactionsHeaders = dataclasses.field()
    path_params: GetAccountsAccountIDTransactionsPathParams = dataclasses.field()
    query_params: GetAccountsAccountIDTransactionsQueryParams = dataclasses.field()
    security: GetAccountsAccountIDTransactionsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAccountsAccountIDTransactionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    ob_error_response1: Optional[shared_oberrorresponse1.ObErrorResponse1] = dataclasses.field(default=None)
    ob_read_transaction6: Optional[shared_obreadtransaction6.ObReadTransaction6] = dataclasses.field(default=None)
    
