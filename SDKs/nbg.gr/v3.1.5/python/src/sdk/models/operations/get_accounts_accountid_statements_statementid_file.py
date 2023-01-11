import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class GetAccountsAccountIDStatementsStatementIDFilePathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    statement_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'statementId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAccountsAccountIDStatementsStatementIDFileHeaders:
    sandbox_id: str = dataclasses.field(metadata={'header': { 'field_name': 'sandbox-id', 'style': 'simple', 'explode': False }})
    x_customer_user_agent: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-customer-user-agent', 'style': 'simple', 'explode': False }})
    x_fapi_auth_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-fapi-auth-date', 'style': 'simple', 'explode': False }})
    x_fapi_customer_ip_address: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-fapi-customer-ip-address', 'style': 'simple', 'explode': False }})
    x_fapi_interaction_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-fapi-interaction-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAccountsAccountIDStatementsStatementIDFileSecurity:
    authorization_code_token: shared_security.SchemeAuthorizationCodeToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    client_id: shared_security.SchemeClientID = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetAccountsAccountIDStatementsStatementIDFileRequest:
    headers: GetAccountsAccountIDStatementsStatementIDFileHeaders = dataclasses.field()
    path_params: GetAccountsAccountIDStatementsStatementIDFilePathParams = dataclasses.field()
    security: GetAccountsAccountIDStatementsStatementIDFileSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAccountsAccountIDStatementsStatementIDFileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    get_accounts_account_id_statements_statement_id_file_200_application_pdf_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
