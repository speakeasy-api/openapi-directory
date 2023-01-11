import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import streamobject as shared_streamobject


@dataclass_json
@dataclasses.dataclass
class StartBackfillJobResponse:
    r"""StartBackfillJobResponse
    Response for manually initiating a backfill job for a specific stream object.
    """
    
    object: Optional[shared_streamobject.StreamObject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('object') }})
    
