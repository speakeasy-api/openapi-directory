import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import instanceospoliciescompliance as shared_instanceospoliciescompliance


@dataclass_json
@dataclasses.dataclass
class ListInstanceOsPoliciesCompliancesResponse:
    r"""ListInstanceOsPoliciesCompliancesResponse
    A response message for listing OS policies compliance data for all Compute Engine VMs in the given location.
    """
    
    instance_os_policies_compliances: Optional[list[shared_instanceospoliciescompliance.InstanceOsPoliciesCompliance]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceOsPoliciesCompliances') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
