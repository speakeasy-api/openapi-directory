import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_BUCKET_SERVERS = [
	"https://verify.twilio.com",
]


@dataclasses.dataclass
class DeleteBucketPathParams:
    rate_limit_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'RateLimitSid', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteBucketSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteBucketRequest:
    path_params: DeleteBucketPathParams = dataclasses.field()
    security: DeleteBucketSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteBucketResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
