import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import analysiscompleted as shared_analysiscompleted
from ..shared import status as shared_status

class DiscoveryOccurrenceAnalysisStatusEnum(str, Enum):
    ANALYSIS_STATUS_UNSPECIFIED = "ANALYSIS_STATUS_UNSPECIFIED"
    PENDING = "PENDING"
    SCANNING = "SCANNING"
    FINISHED_SUCCESS = "FINISHED_SUCCESS"
    COMPLETE = "COMPLETE"
    FINISHED_FAILED = "FINISHED_FAILED"
    FINISHED_UNSUPPORTED = "FINISHED_UNSUPPORTED"

class DiscoveryOccurrenceContinuousAnalysisEnum(str, Enum):
    CONTINUOUS_ANALYSIS_UNSPECIFIED = "CONTINUOUS_ANALYSIS_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"


@dataclass_json
@dataclasses.dataclass
class DiscoveryOccurrence:
    r"""DiscoveryOccurrence
    Provides information about the analysis status of a discovered resource.
    """
    
    analysis_completed: Optional[shared_analysiscompleted.AnalysisCompleted] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analysisCompleted') }})
    analysis_error: Optional[list[shared_status.Status]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analysisError') }})
    analysis_status: Optional[DiscoveryOccurrenceAnalysisStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analysisStatus') }})
    analysis_status_error: Optional[shared_status.Status] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analysisStatusError') }})
    archive_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archiveTime') }})
    continuous_analysis: Optional[DiscoveryOccurrenceContinuousAnalysisEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('continuousAnalysis') }})
    cpe: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpe') }})
    last_scan_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastScanTime') }})
    
