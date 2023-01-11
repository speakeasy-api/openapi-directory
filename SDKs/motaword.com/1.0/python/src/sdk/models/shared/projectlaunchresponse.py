import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import projectlaunchresponseenum_enum as shared_projectlaunchresponseenum_enum


@dataclass_json
@dataclasses.dataclass
class ProjectLaunchResponse:
    status: Optional[shared_projectlaunchresponseenum_enum.ProjectLaunchResponseEnumEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
