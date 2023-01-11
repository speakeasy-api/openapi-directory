import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import numbers_v2_regulatory_compliance_bundle_item_assignment as shared_numbers_v2_regulatory_compliance_bundle_item_assignment


FETCH_ITEM_ASSIGNMENT_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclasses.dataclass
class FetchItemAssignmentPathParams:
    bundle_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'BundleSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchItemAssignmentSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchItemAssignmentRequest:
    path_params: FetchItemAssignmentPathParams = dataclasses.field()
    security: FetchItemAssignmentSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchItemAssignmentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    numbers_v2_regulatory_compliance_bundle_item_assignment: Optional[shared_numbers_v2_regulatory_compliance_bundle_item_assignment.NumbersV2RegulatoryComplianceBundleItemAssignment] = dataclasses.field(default=None)
    
