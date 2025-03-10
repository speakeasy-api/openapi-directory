import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class QueryMetadataDataRangeEnum(str, Enum):
    CUSTOM_DATES = "CUSTOM_DATES"
    CURRENT_DAY = "CURRENT_DAY"
    PREVIOUS_DAY = "PREVIOUS_DAY"
    WEEK_TO_DATE = "WEEK_TO_DATE"
    MONTH_TO_DATE = "MONTH_TO_DATE"
    QUARTER_TO_DATE = "QUARTER_TO_DATE"
    YEAR_TO_DATE = "YEAR_TO_DATE"
    PREVIOUS_WEEK = "PREVIOUS_WEEK"
    PREVIOUS_HALF_MONTH = "PREVIOUS_HALF_MONTH"
    PREVIOUS_MONTH = "PREVIOUS_MONTH"
    PREVIOUS_QUARTER = "PREVIOUS_QUARTER"
    PREVIOUS_YEAR = "PREVIOUS_YEAR"
    LAST_7_DAYS = "LAST_7_DAYS"
    LAST_30_DAYS = "LAST_30_DAYS"
    LAST_90_DAYS = "LAST_90_DAYS"
    LAST_365_DAYS = "LAST_365_DAYS"
    ALL_TIME = "ALL_TIME"
    LAST_14_DAYS = "LAST_14_DAYS"
    TYPE_NOT_SUPPORTED = "TYPE_NOT_SUPPORTED"
    LAST_60_DAYS = "LAST_60_DAYS"

class QueryMetadataFormatEnum(str, Enum):
    CSV = "CSV"
    EXCEL_CSV = "EXCEL_CSV"
    XLSX = "XLSX"


@dataclass_json
@dataclasses.dataclass
class QueryMetadata:
    r"""QueryMetadata
    Query metadata.
    """
    
    data_range: Optional[QueryMetadataDataRangeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataRange') }})
    format: Optional[QueryMetadataFormatEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    google_cloud_storage_path_for_latest_report: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleCloudStoragePathForLatestReport') }})
    google_drive_path_for_latest_report: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleDrivePathForLatestReport') }})
    latest_report_run_time_ms: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestReportRunTimeMs') }})
    locale: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locale') }})
    report_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportCount') }})
    running: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('running') }})
    send_notification: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sendNotification') }})
    share_email_address: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shareEmailAddress') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
