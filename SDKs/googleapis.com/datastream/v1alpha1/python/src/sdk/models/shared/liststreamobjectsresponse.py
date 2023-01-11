import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import streamobject as shared_streamobject


@dataclass_json
@dataclasses.dataclass
class ListStreamObjectsResponse:
    r"""ListStreamObjectsResponse
    Response containing the objects for a stream.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    stream_objects: Optional[list[shared_streamobject.StreamObject]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streamObjects') }})
    
