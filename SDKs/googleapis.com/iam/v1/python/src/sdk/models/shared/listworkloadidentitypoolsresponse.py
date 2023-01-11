import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workloadidentitypool as shared_workloadidentitypool


@dataclass_json
@dataclasses.dataclass
class ListWorkloadIdentityPoolsResponse:
    r"""ListWorkloadIdentityPoolsResponse
    Response message for ListWorkloadIdentityPools.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    workload_identity_pools: Optional[list[shared_workloadidentitypool.WorkloadIdentityPool]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workloadIdentityPools') }})
    
