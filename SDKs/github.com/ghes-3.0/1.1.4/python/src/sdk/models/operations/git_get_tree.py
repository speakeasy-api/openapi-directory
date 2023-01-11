import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import git_tree as shared_git_tree
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class GitGetTreePathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    tree_sha: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tree_sha', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GitGetTreeQueryParams:
    recursive: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'recursive', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GitGetTreeRequest:
    path_params: GitGetTreePathParams = dataclasses.field()
    query_params: GitGetTreeQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GitGetTreeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    git_tree: Optional[shared_git_tree.GitTree] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
