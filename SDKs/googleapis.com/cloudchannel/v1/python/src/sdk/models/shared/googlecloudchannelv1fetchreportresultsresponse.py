import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudchannelv1reportresultsmetadata as shared_googlecloudchannelv1reportresultsmetadata
from ..shared import googlecloudchannelv1row as shared_googlecloudchannelv1row


@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1FetchReportResultsResponse:
    r"""GoogleCloudChannelV1FetchReportResultsResponse
    Response message for CloudChannelReportsService.FetchReportResults. Contains a tabular representation of the report results.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    report_metadata: Optional[shared_googlecloudchannelv1reportresultsmetadata.GoogleCloudChannelV1ReportResultsMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportMetadata') }})
    rows: Optional[list[shared_googlecloudchannelv1row.GoogleCloudChannelV1Row]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rows') }})
    
