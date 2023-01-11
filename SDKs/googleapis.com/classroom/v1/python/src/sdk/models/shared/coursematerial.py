import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import drivefile as shared_drivefile
from ..shared import form as shared_form
from ..shared import link as shared_link
from ..shared import youtubevideo as shared_youtubevideo


@dataclass_json
@dataclasses.dataclass
class CourseMaterial:
    r"""CourseMaterial
    A material attached to a course as part of a material set.
    """
    
    drive_file: Optional[shared_drivefile.DriveFile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('driveFile') }})
    form: Optional[shared_form.Form] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('form') }})
    link: Optional[shared_link.Link] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    you_tube_video: Optional[shared_youtubevideo.YouTubeVideo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('youTubeVideo') }})
    
