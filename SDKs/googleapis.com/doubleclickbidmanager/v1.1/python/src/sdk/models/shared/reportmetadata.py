import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reportstatus as shared_reportstatus


@dataclass_json
@dataclasses.dataclass
class ReportMetadata:
    r"""ReportMetadata
    Report metadata.
    """
    
    google_cloud_storage_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleCloudStoragePath') }})
    report_data_end_time_ms: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportDataEndTimeMs') }})
    report_data_start_time_ms: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportDataStartTimeMs') }})
    status: Optional[shared_reportstatus.ReportStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
