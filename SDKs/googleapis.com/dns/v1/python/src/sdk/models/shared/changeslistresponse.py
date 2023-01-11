import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import change as shared_change
from ..shared import responseheader as shared_responseheader


@dataclass_json
@dataclasses.dataclass
class ChangesListResponse:
    r"""ChangesListResponse
    The response to a request to enumerate Changes to a ResourceRecordSets collection.
    """
    
    changes: Optional[list[shared_change.Change]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changes') }})
    header: Optional[shared_responseheader.ResponseHeader] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('header') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
