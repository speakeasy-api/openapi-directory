import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import snapshot as shared_snapshot


@dataclass_json
@dataclasses.dataclass
class SnapshotListResponse:
    r"""SnapshotListResponse
    A third party list snapshots response.
    """
    
    items: Optional[list[shared_snapshot.Snapshot]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
