import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import volumerestore as shared_volumerestore


@dataclass_json
@dataclasses.dataclass
class ListVolumeRestoresResponse:
    r"""ListVolumeRestoresResponse
    Response message for ListVolumeRestores.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    volume_restores: Optional[list[shared_volumerestore.VolumeRestore]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumeRestores') }})
    
