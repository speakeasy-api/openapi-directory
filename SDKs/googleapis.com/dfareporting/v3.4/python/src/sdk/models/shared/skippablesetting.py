import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import videooffset as shared_videooffset


@dataclass_json
@dataclasses.dataclass
class SkippableSetting:
    r"""SkippableSetting
    Skippable Settings
    """
    
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    progress_offset: Optional[shared_videooffset.VideoOffset] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('progressOffset') }})
    skip_offset: Optional[shared_videooffset.VideoOffset] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skipOffset') }})
    skippable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skippable') }})
    
