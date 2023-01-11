import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import verify_v2_service_rate_limit_bucket as shared_verify_v2_service_rate_limit_bucket


CREATE_BUCKET_SERVERS = [
	"https://verify.twilio.com",
]


@dataclasses.dataclass
class CreateBucketPathParams:
    rate_limit_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'RateLimitSid', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateBucketCreateBucketRequest:
    interval: int = dataclasses.field(metadata={'form': { 'field_name': 'Interval' }})
    max: int = dataclasses.field(metadata={'form': { 'field_name': 'Max' }})
    

@dataclasses.dataclass
class CreateBucketSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateBucketRequest:
    path_params: CreateBucketPathParams = dataclasses.field()
    security: CreateBucketSecurity = dataclasses.field()
    request: Optional[CreateBucketCreateBucketRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateBucketResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    verify_v2_service_rate_limit_bucket: Optional[shared_verify_v2_service_rate_limit_bucket.VerifyV2ServiceRateLimitBucket] = dataclasses.field(default=None)
    
