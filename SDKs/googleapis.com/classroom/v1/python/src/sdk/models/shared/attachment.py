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
class Attachment:
    r"""Attachment
    Attachment added to student assignment work. When creating attachments, setting the `form` field is not supported.
    """
    
    drive_file: Optional[shared_drivefile.DriveFile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('driveFile') }})
    form: Optional[shared_form.Form] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('form') }})
    link: Optional[shared_link.Link] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    you_tube_video: Optional[shared_youtubevideo.YouTubeVideo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('youTubeVideo') }})
    
