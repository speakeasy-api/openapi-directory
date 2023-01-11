import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import audioassetdetails as shared_audioassetdetails


@dataclass_json
@dataclasses.dataclass
class AudioAssets:
    r"""AudioAssets
    Files that are available as part of an audio asset
    """
    
    album_art: Optional[shared_audioassetdetails.AudioAssetDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('album_art') }})
    clean_audio: Optional[shared_audioassetdetails.AudioAssetDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clean_audio') }})
    original_audio: Optional[shared_audioassetdetails.AudioAssetDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('original_audio') }})
    preview_mp3: Optional[shared_audioassetdetails.AudioAssetDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preview_mp3') }})
    preview_ogg: Optional[shared_audioassetdetails.AudioAssetDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preview_ogg') }})
    waveform: Optional[shared_audioassetdetails.AudioAssetDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('waveform') }})
    
