import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import exchangereviewstatus as shared_exchangereviewstatus
from ..shared import publisherreviewstatus as shared_publisherreviewstatus

class ReviewStatusInfoApprovalStatusEnum(str, Enum):
    APPROVAL_STATUS_UNSPECIFIED = "APPROVAL_STATUS_UNSPECIFIED"
    APPROVAL_STATUS_PENDING_NOT_SERVABLE = "APPROVAL_STATUS_PENDING_NOT_SERVABLE"
    APPROVAL_STATUS_PENDING_SERVABLE = "APPROVAL_STATUS_PENDING_SERVABLE"
    APPROVAL_STATUS_APPROVED_SERVABLE = "APPROVAL_STATUS_APPROVED_SERVABLE"
    APPROVAL_STATUS_REJECTED_NOT_SERVABLE = "APPROVAL_STATUS_REJECTED_NOT_SERVABLE"

class ReviewStatusInfoContentAndPolicyReviewStatusEnum(str, Enum):
    REVIEW_STATUS_UNSPECIFIED = "REVIEW_STATUS_UNSPECIFIED"
    REVIEW_STATUS_APPROVED = "REVIEW_STATUS_APPROVED"
    REVIEW_STATUS_REJECTED = "REVIEW_STATUS_REJECTED"
    REVIEW_STATUS_PENDING = "REVIEW_STATUS_PENDING"

class ReviewStatusInfoCreativeAndLandingPageReviewStatusEnum(str, Enum):
    REVIEW_STATUS_UNSPECIFIED = "REVIEW_STATUS_UNSPECIFIED"
    REVIEW_STATUS_APPROVED = "REVIEW_STATUS_APPROVED"
    REVIEW_STATUS_REJECTED = "REVIEW_STATUS_REJECTED"
    REVIEW_STATUS_PENDING = "REVIEW_STATUS_PENDING"


@dataclass_json
@dataclasses.dataclass
class ReviewStatusInfo:
    r"""ReviewStatusInfo
    Review statuses for the creative.
    """
    
    approval_status: Optional[ReviewStatusInfoApprovalStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvalStatus') }})
    content_and_policy_review_status: Optional[ReviewStatusInfoContentAndPolicyReviewStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentAndPolicyReviewStatus') }})
    creative_and_landing_page_review_status: Optional[ReviewStatusInfoCreativeAndLandingPageReviewStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeAndLandingPageReviewStatus') }})
    exchange_review_statuses: Optional[list[shared_exchangereviewstatus.ExchangeReviewStatus]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exchangeReviewStatuses') }})
    publisher_review_statuses: Optional[list[shared_publisherreviewstatus.PublisherReviewStatus]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisherReviewStatuses') }})
    
