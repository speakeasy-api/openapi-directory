import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDiscoveryengineV1alphaMediaInfo:
    r"""GoogleCloudDiscoveryengineV1alphaMediaInfo
    Media-specific user event information.
    """
    
    media_progress_duration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mediaProgressDuration') }})
    media_progress_percentage: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mediaProgressPercentage') }})
    
