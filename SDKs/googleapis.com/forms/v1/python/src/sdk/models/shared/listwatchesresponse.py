import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import watch as shared_watch


@dataclass_json
@dataclasses.dataclass
class ListWatchesResponse:
    r"""ListWatchesResponse
    The response of a ListWatchesRequest.
    """
    
    watches: Optional[list[shared_watch.Watch]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('watches') }})
    
