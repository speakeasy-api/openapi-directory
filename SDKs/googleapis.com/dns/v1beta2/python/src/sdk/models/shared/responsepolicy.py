import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import responsepolicygkecluster as shared_responsepolicygkecluster
from ..shared import responsepolicynetwork as shared_responsepolicynetwork


@dataclass_json
@dataclasses.dataclass
class ResponsePolicy:
    r"""ResponsePolicy
    A Response Policy is a collection of selectors that apply to queries made against one or more Virtual Private Cloud networks.
    """
    
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    gke_clusters: Optional[list[shared_responsepolicygkecluster.ResponsePolicyGkeCluster]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gkeClusters') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    networks: Optional[list[shared_responsepolicynetwork.ResponsePolicyNetwork]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networks') }})
    response_policy_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responsePolicyName') }})
    
