import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import release as shared_release


@dataclasses.dataclass
class ReposGetReleaseByTagPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    tag: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tag', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposGetReleaseByTagRequest:
    path_params: ReposGetReleaseByTagPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposGetReleaseByTagResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    release: Optional[shared_release.Release] = dataclasses.field(default=None)
    
