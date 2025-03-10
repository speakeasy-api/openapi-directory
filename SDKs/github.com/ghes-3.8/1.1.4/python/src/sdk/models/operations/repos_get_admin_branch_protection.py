"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import protected_branch_admin_enforced as shared_protected_branch_admin_enforced
from typing import Optional


@dataclasses.dataclass
class ReposGetAdminBranchProtectionRequest:
    
    branch: str = dataclasses.field(metadata={'path_param': { 'field_name': 'branch', 'style': 'simple', 'explode': False }})
    r"""The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/enterprise-server@3.8/graphql)."""  
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    r"""The account owner of the repository. The name is not case sensitive."""  
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    r"""The name of the repository. The name is not case sensitive."""  
    

@dataclasses.dataclass
class ReposGetAdminBranchProtectionResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    protected_branch_admin_enforced: Optional[shared_protected_branch_admin_enforced.ProtectedBranchAdminEnforced] = dataclasses.field(default=None)
    r"""Response"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    