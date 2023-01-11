import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import volumesnapshot as shared_volumesnapshot


@dataclass_json
@dataclasses.dataclass
class ListVolumeSnapshotsResponse:
    r"""ListVolumeSnapshotsResponse
    Response message containing the list of volume snapshots.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    unreachable: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    volume_snapshots: Optional[list[shared_volumesnapshot.VolumeSnapshot]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumeSnapshots') }})
    
