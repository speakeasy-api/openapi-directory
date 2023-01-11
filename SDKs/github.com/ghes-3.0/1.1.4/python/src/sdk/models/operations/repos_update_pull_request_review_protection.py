import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import protected_branch_pull_request_review as shared_protected_branch_pull_request_review
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class ReposUpdatePullRequestReviewProtectionPathParams:
    branch: str = dataclasses.field(metadata={'path_param': { 'field_name': 'branch', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ReposUpdatePullRequestReviewProtectionRequestBodyDismissalRestrictions:
    r"""ReposUpdatePullRequestReviewProtectionRequestBodyDismissalRestrictions
    Specify which users and teams can dismiss pull request reviews. Pass an empty `dismissal_restrictions` object to disable. User and team `dismissal_restrictions` are only available for organization-owned repositories. Omit this parameter for personal repositories.
    """
    
    teams: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('teams') }})
    users: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('users') }})
    

@dataclass_json
@dataclasses.dataclass
class ReposUpdatePullRequestReviewProtectionRequestBody:
    dismiss_stale_reviews: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dismiss_stale_reviews') }})
    dismissal_restrictions: Optional[ReposUpdatePullRequestReviewProtectionRequestBodyDismissalRestrictions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dismissal_restrictions') }})
    require_code_owner_reviews: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('require_code_owner_reviews') }})
    required_approving_review_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required_approving_review_count') }})
    

@dataclasses.dataclass
class ReposUpdatePullRequestReviewProtectionRequest:
    path_params: ReposUpdatePullRequestReviewProtectionPathParams = dataclasses.field()
    request: Optional[ReposUpdatePullRequestReviewProtectionRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ReposUpdatePullRequestReviewProtectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protected_branch_pull_request_review: Optional[shared_protected_branch_pull_request_review.ProtectedBranchPullRequestReview] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
