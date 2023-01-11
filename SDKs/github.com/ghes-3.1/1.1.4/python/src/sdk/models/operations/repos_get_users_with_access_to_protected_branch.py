import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import simple_user as shared_simple_user


@dataclasses.dataclass
class ReposGetUsersWithAccessToProtectedBranchPathParams:
    branch: str = dataclasses.field(metadata={'path_param': { 'field_name': 'branch', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposGetUsersWithAccessToProtectedBranchRequest:
    path_params: ReposGetUsersWithAccessToProtectedBranchPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposGetUsersWithAccessToProtectedBranchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    simple_users: Optional[list[shared_simple_user.SimpleUser]] = dataclasses.field(default=None)
    
