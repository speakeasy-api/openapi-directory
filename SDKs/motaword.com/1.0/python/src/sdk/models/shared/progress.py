import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import progresssub as shared_progresssub
from ..shared import progresslink as shared_progresslink
from ..shared import projectstatus_enum as shared_projectstatus_enum


@dataclass_json
@dataclasses.dataclass
class Progress:
    languages: Optional[dict[str, shared_progresssub.ProgressSub]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languages') }})
    links: Optional[shared_progresslink.ProgressLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    project_status: Optional[shared_projectstatus_enum.ProjectStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('project_status') }})
    proofreading: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proofreading') }})
    total: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    translation: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('translation') }})
    
