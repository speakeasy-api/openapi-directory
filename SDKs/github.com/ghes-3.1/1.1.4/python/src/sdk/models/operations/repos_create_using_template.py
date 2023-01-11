import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import repository as shared_repository


@dataclasses.dataclass
class ReposCreateUsingTemplatePathParams:
    template_owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'template_owner', 'style': 'simple', 'explode': False }})
    template_repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'template_repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ReposCreateUsingTemplateRequestBody:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    include_all_branches: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('include_all_branches') }})
    owner: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    private: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('private') }})
    

@dataclasses.dataclass
class ReposCreateUsingTemplateRequest:
    path_params: ReposCreateUsingTemplatePathParams = dataclasses.field()
    request: Optional[ReposCreateUsingTemplateRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ReposCreateUsingTemplateResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    repository: Optional[shared_repository.Repository] = dataclasses.field(default=None)
    
