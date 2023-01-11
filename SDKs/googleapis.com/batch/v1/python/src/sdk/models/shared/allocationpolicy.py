import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import instancepolicyortemplate as shared_instancepolicyortemplate
from ..shared import locationpolicy as shared_locationpolicy
from ..shared import networkpolicy as shared_networkpolicy
from ..shared import serviceaccount as shared_serviceaccount


@dataclass_json
@dataclasses.dataclass
class AllocationPolicy:
    r"""AllocationPolicy
    A Job's resource allocation policy describes when, where, and how compute resources should be allocated for the Job.
    """
    
    instances: Optional[list[shared_instancepolicyortemplate.InstancePolicyOrTemplate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instances') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    location: Optional[shared_locationpolicy.LocationPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    network: Optional[shared_networkpolicy.NetworkPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    service_account: Optional[shared_serviceaccount.ServiceAccount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    
