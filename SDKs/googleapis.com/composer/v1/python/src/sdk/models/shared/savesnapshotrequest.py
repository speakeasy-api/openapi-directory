import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SaveSnapshotRequest:
    r"""SaveSnapshotRequest
    Request to create a snapshot of a Cloud Composer environment.
    """
    
    snapshot_location: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snapshotLocation') }})
    
