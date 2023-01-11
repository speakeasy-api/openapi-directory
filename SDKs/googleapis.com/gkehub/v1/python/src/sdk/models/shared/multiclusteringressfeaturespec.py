import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class MultiClusterIngressFeatureSpec:
    r"""MultiClusterIngressFeatureSpec
    **Multi-cluster Ingress**: The configuration for the MultiClusterIngress feature.
    """
    
    config_membership: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configMembership') }})
    
