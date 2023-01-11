import dataclasses
from typing import Optional
from ..shared import page_build as shared_page_build


@dataclasses.dataclass
class ReposGetLatestPagesBuildPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposGetLatestPagesBuildRequest:
    path_params: ReposGetLatestPagesBuildPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposGetLatestPagesBuildResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    page_build: Optional[shared_page_build.PageBuild] = dataclasses.field(default=None)
    
