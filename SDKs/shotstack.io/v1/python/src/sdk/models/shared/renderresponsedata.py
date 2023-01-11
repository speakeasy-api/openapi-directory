import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import edit as shared_edit

class RenderResponseDataStatusEnum(str, Enum):
    QUEUED = "queued"
    FETCHING = "fetching"
    RENDERING = "rendering"
    SAVING = "saving"
    DONE = "done"
    FAILED = "failed"


@dataclass_json
@dataclasses.dataclass
class RenderResponseData:
    r"""RenderResponseData
    The response data returned with the [RenderResponse](#tocs_renderresponse) including status and URL.
    """
    
    created: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    data: shared_edit.Edit = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    owner: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    status: RenderResponseDataStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    updated: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated') }})
    duration: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    error: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    plan: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan') }})
    poster: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('poster') }})
    render_time: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('renderTime') }})
    thumbnail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnail') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
