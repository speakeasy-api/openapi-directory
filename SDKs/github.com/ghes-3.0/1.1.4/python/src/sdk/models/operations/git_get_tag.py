import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import git_tag as shared_git_tag


@dataclasses.dataclass
class GitGetTagPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    tag_sha: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tag_sha', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GitGetTagRequest:
    path_params: GitGetTagPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GitGetTagResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    git_tag: Optional[shared_git_tag.GitTag] = dataclasses.field(default=None)
    
