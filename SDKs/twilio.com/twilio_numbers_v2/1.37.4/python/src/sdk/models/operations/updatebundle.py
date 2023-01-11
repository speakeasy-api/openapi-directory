import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import bundle_enum_status_enum as shared_bundle_enum_status_enum
from ..shared import security as shared_security
from ..shared import numbers_v2_regulatory_compliance_bundle as shared_numbers_v2_regulatory_compliance_bundle


UPDATE_BUNDLE_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclasses.dataclass
class UpdateBundlePathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateBundleUpdateBundleRequest:
    email: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Email' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    status: Optional[shared_bundle_enum_status_enum.BundleEnumStatusEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Status' }})
    status_callback: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    

@dataclasses.dataclass
class UpdateBundleSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateBundleRequest:
    path_params: UpdateBundlePathParams = dataclasses.field()
    security: UpdateBundleSecurity = dataclasses.field()
    request: Optional[UpdateBundleUpdateBundleRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateBundleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    numbers_v2_regulatory_compliance_bundle: Optional[shared_numbers_v2_regulatory_compliance_bundle.NumbersV2RegulatoryComplianceBundle] = dataclasses.field(default=None)
    
