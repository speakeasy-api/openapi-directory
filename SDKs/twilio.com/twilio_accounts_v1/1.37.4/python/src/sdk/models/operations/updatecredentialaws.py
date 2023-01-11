import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import accounts_v1_credential_credential_aws as shared_accounts_v1_credential_credential_aws


UPDATE_CREDENTIAL_AWS_SERVERS = [
	"https://accounts.twilio.com",
]


@dataclasses.dataclass
class UpdateCredentialAwsPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateCredentialAwsUpdateCredentialAwsRequest:
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclasses.dataclass
class UpdateCredentialAwsSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateCredentialAwsRequest:
    path_params: UpdateCredentialAwsPathParams = dataclasses.field()
    security: UpdateCredentialAwsSecurity = dataclasses.field()
    request: Optional[UpdateCredentialAwsUpdateCredentialAwsRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateCredentialAwsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    accounts_v1_credential_credential_aws: Optional[shared_accounts_v1_credential_credential_aws.AccountsV1CredentialCredentialAws] = dataclasses.field(default=None)
    
