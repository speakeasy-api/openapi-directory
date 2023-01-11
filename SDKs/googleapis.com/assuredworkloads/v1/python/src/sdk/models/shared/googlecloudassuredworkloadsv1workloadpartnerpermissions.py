import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudAssuredworkloadsV1WorkloadPartnerPermissions:
    r"""GoogleCloudAssuredworkloadsV1WorkloadPartnerPermissions
    Permissions granted to the AW Partner SA account for the customer workload
    """
    
    data_logs_viewer: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataLogsViewer') }})
    remediate_folder_violations: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remediateFolderViolations') }})
    service_access_approver: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccessApprover') }})
    
