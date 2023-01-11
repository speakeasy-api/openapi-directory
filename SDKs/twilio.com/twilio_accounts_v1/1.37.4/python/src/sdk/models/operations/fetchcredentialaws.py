import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import accounts_v1_credential_credential_aws as shared_accounts_v1_credential_credential_aws


FETCH_CREDENTIAL_AWS_SERVERS = [
	"https://accounts.twilio.com",
]


@dataclasses.dataclass
class FetchCredentialAwsPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchCredentialAwsSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchCredentialAwsRequest:
    path_params: FetchCredentialAwsPathParams = dataclasses.field()
    security: FetchCredentialAwsSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchCredentialAwsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    accounts_v1_credential_credential_aws: Optional[shared_accounts_v1_credential_credential_aws.AccountsV1CredentialCredentialAws] = dataclasses.field(default=None)
    
