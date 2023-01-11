import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import videoabusereportreasonsnippet as shared_videoabusereportreasonsnippet


@dataclass_json
@dataclasses.dataclass
class VideoAbuseReportReason:
    r"""VideoAbuseReportReason
    A `__videoAbuseReportReason__` resource identifies a reason that a video could be reported as abusive. Video abuse report reasons are used with `video.ReportAbuse`.
    """
    
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    snippet: Optional[shared_videoabusereportreasonsnippet.VideoAbuseReportReasonSnippet] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snippet') }})
    
