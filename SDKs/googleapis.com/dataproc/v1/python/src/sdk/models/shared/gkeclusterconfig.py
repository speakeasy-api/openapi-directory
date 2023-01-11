import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import namespacedgkedeploymenttarget as shared_namespacedgkedeploymenttarget
from ..shared import gkenodepooltarget as shared_gkenodepooltarget


@dataclass_json
@dataclasses.dataclass
class GkeClusterConfig:
    r"""GkeClusterConfig
    The cluster's GKE config.
    """
    
    gke_cluster_target: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gkeClusterTarget') }})
    namespaced_gke_deployment_target: Optional[shared_namespacedgkedeploymenttarget.NamespacedGkeDeploymentTarget] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespacedGkeDeploymentTarget') }})
    node_pool_target: Optional[list[shared_gkenodepooltarget.GkeNodePoolTarget]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodePoolTarget') }})
    
