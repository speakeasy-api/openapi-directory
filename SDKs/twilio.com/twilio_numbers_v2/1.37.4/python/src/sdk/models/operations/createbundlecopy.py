import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import numbers_v2_regulatory_compliance_bundle_bundle_copy as shared_numbers_v2_regulatory_compliance_bundle_bundle_copy


CREATE_BUNDLE_COPY_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclasses.dataclass
class CreateBundleCopyPathParams:
    bundle_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'BundleSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateBundleCopyCreateBundleCopyRequest:
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclasses.dataclass
class CreateBundleCopySecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateBundleCopyRequest:
    path_params: CreateBundleCopyPathParams = dataclasses.field()
    security: CreateBundleCopySecurity = dataclasses.field()
    request: Optional[CreateBundleCopyCreateBundleCopyRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateBundleCopyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    numbers_v2_regulatory_compliance_bundle_bundle_copy: Optional[shared_numbers_v2_regulatory_compliance_bundle_bundle_copy.NumbersV2RegulatoryComplianceBundleBundleCopy] = dataclasses.field(default=None)
    
