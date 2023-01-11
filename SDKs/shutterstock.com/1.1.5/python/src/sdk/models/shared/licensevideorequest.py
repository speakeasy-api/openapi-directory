import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import licensevideo as shared_licensevideo


@dataclass_json
@dataclasses.dataclass
class LicenseVideoRequest:
    r"""LicenseVideoRequest
    List of videos to license
    """
    
    videos: list[shared_licensevideo.LicenseVideo] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    
