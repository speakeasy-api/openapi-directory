import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2error as shared_googleprivacydlpv2error
from ..shared import googleprivacydlpv2inspectdatasourcedetails as shared_googleprivacydlpv2inspectdatasourcedetails
from ..shared import googleprivacydlpv2analyzedatasourceriskdetails as shared_googleprivacydlpv2analyzedatasourceriskdetails

class GooglePrivacyDlpV2DlpJobStateEnum(str, Enum):
    JOB_STATE_UNSPECIFIED = "JOB_STATE_UNSPECIFIED"
    PENDING = "PENDING"
    RUNNING = "RUNNING"
    DONE = "DONE"
    CANCELED = "CANCELED"
    FAILED = "FAILED"
    ACTIVE = "ACTIVE"

class GooglePrivacyDlpV2DlpJobTypeEnum(str, Enum):
    DLP_JOB_TYPE_UNSPECIFIED = "DLP_JOB_TYPE_UNSPECIFIED"
    INSPECT_JOB = "INSPECT_JOB"
    RISK_ANALYSIS_JOB = "RISK_ANALYSIS_JOB"


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2DlpJob:
    r"""GooglePrivacyDlpV2DlpJob
    Combines all of the information about a DLP job.
    """
    
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    end_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    errors: Optional[list[shared_googleprivacydlpv2error.GooglePrivacyDlpV2Error]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    inspect_details: Optional[shared_googleprivacydlpv2inspectdatasourcedetails.GooglePrivacyDlpV2InspectDataSourceDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inspectDetails') }})
    job_trigger_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobTriggerName') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    risk_details: Optional[shared_googleprivacydlpv2analyzedatasourceriskdetails.GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('riskDetails') }})
    start_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    state: Optional[GooglePrivacyDlpV2DlpJobStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    type: Optional[GooglePrivacyDlpV2DlpJobTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
