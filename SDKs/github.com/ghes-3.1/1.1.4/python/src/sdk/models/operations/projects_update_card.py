import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basic_error as shared_basic_error
from ..shared import project_card as shared_project_card
from ..shared import validation_error_simple as shared_validation_error_simple


@dataclasses.dataclass
class ProjectsUpdateCardPathParams:
    card_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'card_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ProjectsUpdateCardRequestBody:
    archived: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archived') }})
    note: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    

@dataclasses.dataclass
class ProjectsUpdateCardRequest:
    path_params: ProjectsUpdateCardPathParams = dataclasses.field()
    request: Optional[ProjectsUpdateCardRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ProjectsUpdateCardResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    project_card: Optional[shared_project_card.ProjectCard] = dataclasses.field(default=None)
    validation_error_simple: Optional[shared_validation_error_simple.ValidationErrorSimple] = dataclasses.field(default=None)
    
