import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import licenseaudio as shared_licenseaudio


@dataclass_json
@dataclasses.dataclass
class LicenseAudioRequest:
    r"""LicenseAudioRequest
    Audio license request data
    """
    
    audio: list[shared_licenseaudio.LicenseAudio] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio') }})
    
