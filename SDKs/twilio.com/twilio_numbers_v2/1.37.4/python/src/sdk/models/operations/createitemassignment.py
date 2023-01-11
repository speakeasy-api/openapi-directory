import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import numbers_v2_regulatory_compliance_bundle_item_assignment as shared_numbers_v2_regulatory_compliance_bundle_item_assignment


CREATE_ITEM_ASSIGNMENT_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclasses.dataclass
class CreateItemAssignmentPathParams:
    bundle_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'BundleSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateItemAssignmentCreateItemAssignmentRequest:
    object_sid: str = dataclasses.field(metadata={'form': { 'field_name': 'ObjectSid' }})
    

@dataclasses.dataclass
class CreateItemAssignmentSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateItemAssignmentRequest:
    path_params: CreateItemAssignmentPathParams = dataclasses.field()
    security: CreateItemAssignmentSecurity = dataclasses.field()
    request: Optional[CreateItemAssignmentCreateItemAssignmentRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateItemAssignmentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    numbers_v2_regulatory_compliance_bundle_item_assignment: Optional[shared_numbers_v2_regulatory_compliance_bundle_item_assignment.NumbersV2RegulatoryComplianceBundleItemAssignment] = dataclasses.field(default=None)
    
