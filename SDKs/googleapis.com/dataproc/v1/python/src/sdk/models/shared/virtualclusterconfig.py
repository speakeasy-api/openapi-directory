import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import auxiliaryservicesconfig as shared_auxiliaryservicesconfig
from ..shared import kubernetesclusterconfig as shared_kubernetesclusterconfig


@dataclass_json
@dataclasses.dataclass
class VirtualClusterConfig:
    r"""VirtualClusterConfig
    The Dataproc cluster config for a cluster that does not directly control the underlying compute resources, such as a Dataproc-on-GKE cluster (https://cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke).
    """
    
    auxiliary_services_config: Optional[shared_auxiliaryservicesconfig.AuxiliaryServicesConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auxiliaryServicesConfig') }})
    kubernetes_cluster_config: Optional[shared_kubernetesclusterconfig.KubernetesClusterConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kubernetesClusterConfig') }})
    staging_bucket: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stagingBucket') }})
    
