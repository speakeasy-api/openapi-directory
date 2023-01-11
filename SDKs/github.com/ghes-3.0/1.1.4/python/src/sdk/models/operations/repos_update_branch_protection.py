import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basic_error as shared_basic_error
from ..shared import protected_branch as shared_protected_branch
from ..shared import validation_error_simple as shared_validation_error_simple


@dataclasses.dataclass
class ReposUpdateBranchProtectionPathParams:
    branch: str = dataclasses.field(metadata={'path_param': { 'field_name': 'branch', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsDismissalRestrictions:
    r"""ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsDismissalRestrictions
    Specify which users and teams can dismiss pull request reviews. Pass an empty `dismissal_restrictions` object to disable. User and team `dismissal_restrictions` are only available for organization-owned repositories. Omit this parameter for personal repositories.
    """
    
    teams: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('teams') }})
    users: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('users') }})
    

@dataclass_json
@dataclasses.dataclass
class ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviews:
    r"""ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviews
    Require at least one approving review on a pull request, before merging. Set to `null` to disable.
    """
    
    dismiss_stale_reviews: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dismiss_stale_reviews') }})
    dismissal_restrictions: Optional[ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsDismissalRestrictions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dismissal_restrictions') }})
    require_code_owner_reviews: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('require_code_owner_reviews') }})
    required_approving_review_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required_approving_review_count') }})
    

@dataclass_json
@dataclasses.dataclass
class ReposUpdateBranchProtectionRequestBodyRequiredStatusChecks:
    r"""ReposUpdateBranchProtectionRequestBodyRequiredStatusChecks
    Require status checks to pass before merging. Set to `null` to disable.
    """
    
    contexts: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contexts') }})
    strict: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('strict') }})
    

@dataclass_json
@dataclasses.dataclass
class ReposUpdateBranchProtectionRequestBodyRestrictions:
    r"""ReposUpdateBranchProtectionRequestBodyRestrictions
    Restrict who can push to the protected branch. User, app, and team `restrictions` are only available for organization-owned repositories. Set to `null` to disable.
    """
    
    teams: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('teams') }})
    users: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('users') }})
    apps: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apps') }})
    

@dataclass_json
@dataclasses.dataclass
class ReposUpdateBranchProtectionRequestBody:
    enforce_admins: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforce_admins') }})
    required_pull_request_reviews: ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviews = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('required_pull_request_reviews') }})
    required_status_checks: ReposUpdateBranchProtectionRequestBodyRequiredStatusChecks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('required_status_checks') }})
    restrictions: ReposUpdateBranchProtectionRequestBodyRestrictions = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('restrictions') }})
    allow_deletions: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_deletions') }})
    allow_force_pushes: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_force_pushes') }})
    required_linear_history: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required_linear_history') }})
    

@dataclass_json
@dataclasses.dataclass
class ReposUpdateBranchProtection415ApplicationJSON:
    documentation_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class ReposUpdateBranchProtectionRequest:
    path_params: ReposUpdateBranchProtectionPathParams = dataclasses.field()
    request: Optional[ReposUpdateBranchProtectionRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ReposUpdateBranchProtectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    protected_branch: Optional[shared_protected_branch.ProtectedBranch] = dataclasses.field(default=None)
    repos_update_branch_protection_415_application_json_object: Optional[ReposUpdateBranchProtection415ApplicationJSON] = dataclasses.field(default=None)
    validation_error_simple: Optional[shared_validation_error_simple.ValidationErrorSimple] = dataclasses.field(default=None)
    
