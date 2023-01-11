import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workloadidentitypoolprovider as shared_workloadidentitypoolprovider


@dataclass_json
@dataclasses.dataclass
class ListWorkloadIdentityPoolProvidersResponse:
    r"""ListWorkloadIdentityPoolProvidersResponse
    Response message for ListWorkloadIdentityPoolProviders.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    workload_identity_pool_providers: Optional[list[shared_workloadidentitypoolprovider.WorkloadIdentityPoolProvider]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workloadIdentityPoolProviders') }})
    
