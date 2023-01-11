import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2dlpjob as shared_googleprivacydlpv2dlpjob


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2ListDlpJobsResponse:
    r"""GooglePrivacyDlpV2ListDlpJobsResponse
    The response message for listing DLP jobs.
    """
    
    jobs: Optional[list[shared_googleprivacydlpv2dlpjob.GooglePrivacyDlpV2DlpJob]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobs') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
