import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import crop as shared_crop


@dataclass_json
@dataclasses.dataclass
class VideoAsset:
    r"""VideoAsset
    The VideoAsset is used to create video sequences from video files. The src must be a publicly accessible URL to a video resource such as an mp4 file.
    """
    
    src: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('src') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    crop: Optional[shared_crop.Crop] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('crop') }})
    trim: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trim') }})
    volume: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volume') }})
    
