import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import videoabusereportsecondaryreason as shared_videoabusereportsecondaryreason


@dataclass_json
@dataclasses.dataclass
class VideoAbuseReportReasonSnippet:
    r"""VideoAbuseReportReasonSnippet
    Basic details about a video category, such as its localized title.
    """
    
    label: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    secondary_reasons: Optional[list[shared_videoabusereportsecondaryreason.VideoAbuseReportSecondaryReason]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondaryReasons') }})
    
