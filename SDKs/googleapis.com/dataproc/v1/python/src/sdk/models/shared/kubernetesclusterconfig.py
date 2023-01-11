import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gkeclusterconfig as shared_gkeclusterconfig
from ..shared import kubernetessoftwareconfig as shared_kubernetessoftwareconfig


@dataclass_json
@dataclasses.dataclass
class KubernetesClusterConfig:
    r"""KubernetesClusterConfig
    The configuration for running the Dataproc cluster on Kubernetes.
    """
    
    gke_cluster_config: Optional[shared_gkeclusterconfig.GkeClusterConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gkeClusterConfig') }})
    kubernetes_namespace: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kubernetesNamespace') }})
    kubernetes_software_config: Optional[shared_kubernetessoftwareconfig.KubernetesSoftwareConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kubernetesSoftwareConfig') }})
    
