import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudchannelv1daterange as shared_googlecloudchannelv1daterange
from ..shared import googlecloudchannelv1report as shared_googlecloudchannelv1report


@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1ReportResultsMetadata:
    r"""GoogleCloudChannelV1ReportResultsMetadata
    The features describing the data. Returned by CloudChannelReportsService.RunReportJob and CloudChannelReportsService.FetchReportResults.
    """
    
    date_range: Optional[shared_googlecloudchannelv1daterange.GoogleCloudChannelV1DateRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateRange') }})
    preceding_date_range: Optional[shared_googlecloudchannelv1daterange.GoogleCloudChannelV1DateRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('precedingDateRange') }})
    report: Optional[shared_googlecloudchannelv1report.GoogleCloudChannelV1Report] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('report') }})
    row_count: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowCount') }})
    
