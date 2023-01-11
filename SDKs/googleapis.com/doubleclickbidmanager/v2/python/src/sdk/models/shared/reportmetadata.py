import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import date_ as shared_date_
from ..shared import reportstatus as shared_reportstatus


@dataclass_json
@dataclasses.dataclass
class ReportMetadata:
    r"""ReportMetadata
    Report metadata.
    """
    
    google_cloud_storage_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleCloudStoragePath') }})
    report_data_end_date: Optional[shared_date_.Date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportDataEndDate') }})
    report_data_start_date: Optional[shared_date_.Date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportDataStartDate') }})
    status: Optional[shared_reportstatus.ReportStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
