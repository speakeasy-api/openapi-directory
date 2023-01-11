import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import check_run as shared_check_run


@dataclasses.dataclass
class ChecksUpdatePathParams:
    check_run_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'check_run_id', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ChecksUpdateRequestBodyActions:
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    identifier: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('identifier') }})
    label: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    
class ChecksUpdateRequestBodyConclusionEnum(str, Enum):
    ACTION_REQUIRED = "action_required"
    CANCELLED = "cancelled"
    FAILURE = "failure"
    NEUTRAL = "neutral"
    SUCCESS = "success"
    SKIPPED = "skipped"
    STALE = "stale"
    TIMED_OUT = "timed_out"

class ChecksUpdateRequestBodyOutputAnnotationsAnnotationLevelEnum(str, Enum):
    NOTICE = "notice"
    WARNING = "warning"
    FAILURE = "failure"


@dataclass_json
@dataclasses.dataclass
class ChecksUpdateRequestBodyOutputAnnotations:
    annotation_level: ChecksUpdateRequestBodyOutputAnnotationsAnnotationLevelEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotation_level') }})
    end_line: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_line') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    path: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    start_line: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_line') }})
    end_column: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_column') }})
    raw_details: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('raw_details') }})
    start_column: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_column') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclasses.dataclass
class ChecksUpdateRequestBodyOutputImages:
    alt: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('alt') }})
    image_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_url') }})
    caption: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caption') }})
    

@dataclass_json
@dataclasses.dataclass
class ChecksUpdateRequestBodyOutput:
    r"""ChecksUpdateRequestBodyOutput
    Check runs can accept a variety of data in the `output` object, including a `title` and `summary` and can optionally provide descriptive details about the run. See the [`output` object](https://docs.github.com/enterprise-server@3.1/rest/reference/checks#output-object-1) description.
    """
    
    summary: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('summary') }})
    annotations: Optional[list[ChecksUpdateRequestBodyOutputAnnotations]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotations') }})
    images: Optional[list[ChecksUpdateRequestBodyOutputImages]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
class ChecksUpdateRequestBodyStatusEnum(str, Enum):
    QUEUED = "queued"
    IN_PROGRESS = "in_progress"
    COMPLETED = "completed"


@dataclass_json
@dataclasses.dataclass
class ChecksUpdateRequestBody:
    actions: Optional[list[ChecksUpdateRequestBodyActions]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    completed_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completed_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    conclusion: Optional[ChecksUpdateRequestBodyConclusionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conclusion') }})
    details_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details_url') }})
    external_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    output: Optional[ChecksUpdateRequestBodyOutput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('output') }})
    started_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('started_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[ChecksUpdateRequestBodyStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclasses.dataclass
class ChecksUpdateRequest:
    path_params: ChecksUpdatePathParams = dataclasses.field()
    request: Optional[ChecksUpdateRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ChecksUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    check_run: Optional[shared_check_run.CheckRun] = dataclasses.field(default=None)
    
