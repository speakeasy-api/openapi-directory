import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basic_error as shared_basic_error
from ..shared import project_column as shared_project_column


@dataclasses.dataclass
class ProjectsUpdateColumnPathParams:
    column_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'column_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ProjectsUpdateColumnRequestBody:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclasses.dataclass
class ProjectsUpdateColumnRequest:
    path_params: ProjectsUpdateColumnPathParams = dataclasses.field()
    request: Optional[ProjectsUpdateColumnRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ProjectsUpdateColumnResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    project_column: Optional[shared_project_column.ProjectColumn] = dataclasses.field(default=None)
    
