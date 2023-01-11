import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import backfilljob as shared_backfilljob
from ..shared import error as shared_error
from ..shared import sourceobjectidentifier as shared_sourceobjectidentifier


@dataclass_json
@dataclasses.dataclass
class StreamObject:
    r"""StreamObject
    A specific stream object (e.g a specific DB table).
    """
    
    backfill_job: Optional[shared_backfilljob.BackfillJob] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backfillJob') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    errors: Optional[list[shared_error.Error]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    source_object: Optional[shared_sourceobjectidentifier.SourceObjectIdentifier] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceObject') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
