import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import audio as shared_audio
from ..shared import color as shared_color
from ..shared import crop as shared_crop
from ..shared import deblock as shared_deblock
from ..shared import deinterlace as shared_deinterlace
from ..shared import denoise as shared_denoise
from ..shared import pad as shared_pad


@dataclass_json
@dataclasses.dataclass
class PreprocessingConfig:
    r"""PreprocessingConfig
    Preprocessing configurations.
    """
    
    audio: Optional[shared_audio.Audio] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio') }})
    color: Optional[shared_color.Color] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    crop: Optional[shared_crop.Crop] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('crop') }})
    deblock: Optional[shared_deblock.Deblock] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deblock') }})
    deinterlace: Optional[shared_deinterlace.Deinterlace] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deinterlace') }})
    denoise: Optional[shared_denoise.Denoise] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('denoise') }})
    pad: Optional[shared_pad.Pad] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pad') }})
    
