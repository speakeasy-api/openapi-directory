import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import h264codecsettings as shared_h264codecsettings
from ..shared import h265codecsettings as shared_h265codecsettings
from ..shared import vp9codecsettings as shared_vp9codecsettings


@dataclass_json
@dataclasses.dataclass
class VideoStream:
    r"""VideoStream
    Video stream resource.
    """
    
    h264: Optional[shared_h264codecsettings.H264CodecSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('h264') }})
    h265: Optional[shared_h265codecsettings.H265CodecSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('h265') }})
    vp9: Optional[shared_vp9codecsettings.Vp9CodecSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vp9') }})
    
