import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import urldownloadsize as shared_urldownloadsize


@dataclass_json
@dataclasses.dataclass
class DownloadSizeEvidence:
    r"""DownloadSizeEvidence
    Total download size and URL-level download size breakdown for resources in a creative.
    """
    
    top_url_download_size_breakdowns: Optional[list[shared_urldownloadsize.URLDownloadSize]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topUrlDownloadSizeBreakdowns') }})
    total_download_size_kb: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalDownloadSizeKb') }})
    
