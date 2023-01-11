import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basic_error as shared_basic_error
from ..shared import project_card as shared_project_card
from ..shared import validation_error as shared_validation_error
from ..shared import validation_error_simple as shared_validation_error_simple


@dataclasses.dataclass
class ProjectsCreateCardPathParams:
    column_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'column_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ProjectsCreateCardRequestBody1:
    note: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    

@dataclass_json
@dataclasses.dataclass
class ProjectsCreateCardRequestBody2:
    content_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_id') }})
    content_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_type') }})
    

@dataclass_json
@dataclasses.dataclass
class ProjectsCreateCard503ApplicationJSONErrors:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class ProjectsCreateCard503ApplicationJSON:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    documentation_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    errors: Optional[list[ProjectsCreateCard503ApplicationJSONErrors]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class ProjectsCreateCardRequest:
    path_params: ProjectsCreateCardPathParams = dataclasses.field()
    request: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ProjectsCreateCardResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    project_card: Optional[shared_project_card.ProjectCard] = dataclasses.field(default=None)
    projects_create_card_422_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    projects_create_card_503_application_json_object: Optional[ProjectsCreateCard503ApplicationJSON] = dataclasses.field(default=None)
    
