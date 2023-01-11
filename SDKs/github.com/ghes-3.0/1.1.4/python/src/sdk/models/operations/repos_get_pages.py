import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import page as shared_page


@dataclasses.dataclass
class ReposGetPagesPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposGetPagesRequest:
    path_params: ReposGetPagesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposGetPagesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    page: Optional[shared_page.Page] = dataclasses.field(default=None)
    
