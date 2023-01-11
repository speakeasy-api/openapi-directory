import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class JobStatusEnum(str, Enum):
    QUEUED = "queued"
    IN_PROGRESS = "in_progress"
    COMPLETED = "completed"

class JobStepsStatusEnum(str, Enum):
    QUEUED = "queued"
    IN_PROGRESS = "in_progress"
    COMPLETED = "completed"


@dataclass_json
@dataclasses.dataclass
class JobSteps:
    conclusion: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('conclusion') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    number: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    status: JobStepsStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    completed_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completed_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    started_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('started_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclasses.dataclass
class Job:
    r"""Job
    Information of a job execution in a workflow run
    """
    
    check_run_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('check_run_url') }})
    completed_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('completed_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    conclusion: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('conclusion') }})
    head_sha: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('head_sha') }})
    html_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    node_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    run_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('run_id') }})
    run_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('run_url') }})
    started_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('started_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: JobStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    steps: Optional[list[JobSteps]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('steps') }})
    
