import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudchannelv1daterange as shared_googlecloudchannelv1daterange


@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1RunReportJobRequest:
    r"""GoogleCloudChannelV1RunReportJobRequest
    Request message for CloudChannelReportsService.RunReportJob.
    """
    
    date_range: Optional[shared_googlecloudchannelv1daterange.GoogleCloudChannelV1DateRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateRange') }})
    filter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    language_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    
