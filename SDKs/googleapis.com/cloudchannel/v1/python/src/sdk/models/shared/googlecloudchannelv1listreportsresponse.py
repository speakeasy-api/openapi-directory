import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudchannelv1report as shared_googlecloudchannelv1report


@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1ListReportsResponse:
    r"""GoogleCloudChannelV1ListReportsResponse
    Response message for CloudChannelReportsService.ListReports.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    reports: Optional[list[shared_googlecloudchannelv1report.GoogleCloudChannelV1Report]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reports') }})
    
