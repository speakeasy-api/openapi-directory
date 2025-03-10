"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import basic_error as shared_basic_error
from ..shared import protected_branch as shared_protected_branch
from ..shared import validation_error_simple as shared_validation_error_simple
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsBypassPullRequestAllowances:
    r"""Allow specific users, teams, or apps to bypass pull request requirements."""
    
    apps: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('apps'), 'exclude': lambda f: f is None }})
    r"""The list of app `slug`s allowed to bypass pull request requirements."""  
    teams: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('teams'), 'exclude': lambda f: f is None }})
    r"""The list of team `slug`s allowed to bypass pull request requirements."""  
    users: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('users'), 'exclude': lambda f: f is None }})
    r"""The list of user `login`s allowed to bypass pull request requirements."""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsDismissalRestrictions:
    r"""Specify which users, teams, and apps can dismiss pull request reviews. Pass an empty `dismissal_restrictions` object to disable. User and team `dismissal_restrictions` are only available for organization-owned repositories. Omit this parameter for personal repositories."""
    
    apps: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('apps'), 'exclude': lambda f: f is None }})
    r"""The list of app `slug`s with dismissal access"""  
    teams: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('teams'), 'exclude': lambda f: f is None }})
    r"""The list of team `slug`s with dismissal access"""  
    users: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('users'), 'exclude': lambda f: f is None }})
    r"""The list of user `login`s with dismissal access"""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviews:
    r"""Require at least one approving review on a pull request, before merging. Set to `null` to disable."""
    
    bypass_pull_request_allowances: Optional[ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsBypassPullRequestAllowances] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('bypass_pull_request_allowances'), 'exclude': lambda f: f is None }})
    r"""Allow specific users, teams, or apps to bypass pull request requirements."""  
    dismiss_stale_reviews: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('dismiss_stale_reviews'), 'exclude': lambda f: f is None }})
    r"""Set to `true` if you want to automatically dismiss approving reviews when someone pushes a new commit."""  
    dismissal_restrictions: Optional[ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsDismissalRestrictions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('dismissal_restrictions'), 'exclude': lambda f: f is None }})
    r"""Specify which users, teams, and apps can dismiss pull request reviews. Pass an empty `dismissal_restrictions` object to disable. User and team `dismissal_restrictions` are only available for organization-owned repositories. Omit this parameter for personal repositories."""  
    require_code_owner_reviews: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('require_code_owner_reviews'), 'exclude': lambda f: f is None }})
    r"""Blocks merging pull requests until [code owners](https://docs.github.com/enterprise-server@3.6/articles/about-code-owners/) review them."""  
    required_approving_review_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('required_approving_review_count'), 'exclude': lambda f: f is None }})
    r"""Specify the number of reviewers required to approve pull requests. Use a number between 1 and 6 or 0 to not require reviewers."""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ReposUpdateBranchProtectionRequestBodyRequiredStatusChecksChecks:
    
    context: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('context') }})
    r"""The name of the required check"""  
    app_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('app_id'), 'exclude': lambda f: f is None }})
    r"""The ID of the GitHub App that must provide this check. Omit this field to automatically select the GitHub App that has recently provided this check, or any app if it was not set by a GitHub App. Pass -1 to explicitly allow any app to set the status."""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ReposUpdateBranchProtectionRequestBodyRequiredStatusChecks:
    r"""Require status checks to pass before merging. Set to `null` to disable."""
    
    contexts: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('contexts') }})
    r"""**Deprecated**: The list of status checks to require in order to merge into this branch. If any of these checks have recently been set by a particular GitHub App, they will be required to come from that app in future for the branch to merge. Use `checks` instead of `contexts` for more fine-grained control."""  
    strict: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('strict') }})
    r"""Require branches to be up to date before merging."""  
    checks: Optional[list[ReposUpdateBranchProtectionRequestBodyRequiredStatusChecksChecks]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('checks'), 'exclude': lambda f: f is None }})
    r"""The list of status checks to require in order to merge into this branch."""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ReposUpdateBranchProtectionRequestBodyRestrictions:
    r"""Restrict who can push to the protected branch. User, app, and team `restrictions` are only available for organization-owned repositories. Set to `null` to disable."""
    
    teams: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('teams') }})
    r"""The list of team `slug`s with push access"""  
    users: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('users') }})
    r"""The list of user `login`s with push access"""  
    apps: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('apps'), 'exclude': lambda f: f is None }})
    r"""The list of app `slug`s with push access"""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ReposUpdateBranchProtectionRequestBody:
    
    enforce_admins: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('enforce_admins') }})
    r"""Enforce all configured restrictions for administrators. Set to `true` to enforce required status checks for repository administrators. Set to `null` to disable."""  
    required_pull_request_reviews: ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviews = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('required_pull_request_reviews') }})
    r"""Require at least one approving review on a pull request, before merging. Set to `null` to disable."""  
    required_status_checks: ReposUpdateBranchProtectionRequestBodyRequiredStatusChecks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('required_status_checks') }})
    r"""Require status checks to pass before merging. Set to `null` to disable."""  
    restrictions: ReposUpdateBranchProtectionRequestBodyRestrictions = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('restrictions') }})
    r"""Restrict who can push to the protected branch. User, app, and team `restrictions` are only available for organization-owned repositories. Set to `null` to disable."""  
    allow_deletions: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('allow_deletions'), 'exclude': lambda f: f is None }})
    r"""Allows deletion of the protected branch by anyone with write access to the repository. Set to `false` to prevent deletion of the protected branch. Default: `false`. For more information, see \\"[Enabling force pushes to a protected branch](https://docs.github.com/enterprise-server@3.6/github/administering-a-repository/enabling-force-pushes-to-a-protected-branch)\\" in the GitHub Help documentation."""  
    allow_force_pushes: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('allow_force_pushes'), 'exclude': lambda f: f is None }})
    r"""Permits force pushes to the protected branch by anyone with write access to the repository. Set to `true` to allow force pushes. Set to `false` or `null` to block force pushes. Default: `false`. For more information, see \\"[Enabling force pushes to a protected branch](https://docs.github.com/enterprise-server@3.6/github/administering-a-repository/enabling-force-pushes-to-a-protected-branch)\\" in the GitHub Help documentation.\\" """  
    block_creations: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('block_creations'), 'exclude': lambda f: f is None }})
    r"""If set to `true`, the `restrictions` branch protection settings which limits who can push will also block pushes which create new branches, unless the push is initiated by a user, team, or app which has the ability to push. Set to `true` to restrict new branch creation. Default: `false`."""  
    required_conversation_resolution: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('required_conversation_resolution'), 'exclude': lambda f: f is None }})
    r"""Requires all conversations on code to be resolved before a pull request can be merged into a branch that matches this rule. Set to `false` to disable. Default: `false`."""  
    required_linear_history: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('required_linear_history'), 'exclude': lambda f: f is None }})
    r"""Enforces a linear commit Git history, which prevents anyone from pushing merge commits to a branch. Set to `true` to enforce a linear commit history. Set to `false` to disable a linear commit Git history. Your repository must allow squash merging or rebase merging before you can enable a linear commit history. Default: `false`. For more information, see \\"[Requiring a linear commit history](https://docs.github.com/enterprise-server@3.6/github/administering-a-repository/requiring-a-linear-commit-history)\\" in the GitHub Help documentation."""  
    

@dataclasses.dataclass
class ReposUpdateBranchProtectionRequest:
    
    branch: str = dataclasses.field(metadata={'path_param': { 'field_name': 'branch', 'style': 'simple', 'explode': False }})
    r"""The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/enterprise-server@3.6/graphql)."""  
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    r"""The account owner of the repository. The name is not case sensitive."""  
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    r"""The name of the repository. The name is not case sensitive."""  
    request_body: ReposUpdateBranchProtectionRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})  
    

@dataclasses.dataclass
class ReposUpdateBranchProtectionResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    r"""Forbidden"""  
    protected_branch: Optional[shared_protected_branch.ProtectedBranch] = dataclasses.field(default=None)
    r"""Response"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    validation_error_simple: Optional[shared_validation_error_simple.ValidationErrorSimple] = dataclasses.field(default=None)
    r"""Validation failed, or the endpoint has been spammed."""  
    