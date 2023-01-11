import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import accounts_v1_credential_credential_aws as shared_accounts_v1_credential_credential_aws


CREATE_CREDENTIAL_AWS_SERVERS = [
	"https://accounts.twilio.com",
]


@dataclasses.dataclass
class CreateCredentialAwsCreateCredentialAwsRequest:
    credentials: str = dataclasses.field(metadata={'form': { 'field_name': 'Credentials' }})
    account_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AccountSid' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclasses.dataclass
class CreateCredentialAwsSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateCredentialAwsRequest:
    security: CreateCredentialAwsSecurity = dataclasses.field()
    request: Optional[CreateCredentialAwsCreateCredentialAwsRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateCredentialAwsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    accounts_v1_credential_credential_aws: Optional[shared_accounts_v1_credential_credential_aws.AccountsV1CredentialCredentialAws] = dataclasses.field(default=None)
    
