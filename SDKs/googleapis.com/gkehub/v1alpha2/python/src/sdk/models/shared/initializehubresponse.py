import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class InitializeHubResponse:
    r"""InitializeHubResponse
    Response message for the InitializeHub method.
    """
    
    service_identity: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceIdentity') }})
    workload_identity_pool: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workloadIdentityPool') }})
    
