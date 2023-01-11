import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2inspectjobconfig as shared_googleprivacydlpv2inspectjobconfig
from ..shared import googleprivacydlpv2riskanalysisjobconfig as shared_googleprivacydlpv2riskanalysisjobconfig


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2CreateDlpJobRequest:
    r"""GooglePrivacyDlpV2CreateDlpJobRequest
    Request message for CreateDlpJobRequest. Used to initiate long running jobs such as calculating risk metrics or inspecting Google Cloud Storage.
    """
    
    inspect_job: Optional[shared_googleprivacydlpv2inspectjobconfig.GooglePrivacyDlpV2InspectJobConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inspectJob') }})
    job_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobId') }})
    location_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationId') }})
    risk_job: Optional[shared_googleprivacydlpv2riskanalysisjobconfig.GooglePrivacyDlpV2RiskAnalysisJobConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('riskJob') }})
    
