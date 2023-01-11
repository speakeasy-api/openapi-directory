import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import appliancecluster as shared_appliancecluster
from ..shared import edgecluster as shared_edgecluster
from ..shared import gkecluster as shared_gkecluster
from ..shared import kubernetesresource as shared_kubernetesresource
from ..shared import multicloudcluster as shared_multicloudcluster
from ..shared import onpremcluster as shared_onpremcluster
from ..shared import gkecluster as shared_gkecluster
from ..shared import kubernetesmetadata as shared_kubernetesmetadata
from ..shared import kubernetesresource as shared_kubernetesresource
from ..shared import multicloudcluster as shared_multicloudcluster
from ..shared import onpremcluster as shared_onpremcluster


@dataclass_json
@dataclasses.dataclass
class MembershipEndpointInput:
    r"""MembershipEndpointInput
    MembershipEndpoint contains information needed to contact a Kubernetes API, endpoint and any additional Kubernetes metadata.
    """
    
    appliance_cluster: Optional[shared_appliancecluster.ApplianceCluster] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applianceCluster') }})
    edge_cluster: Optional[shared_edgecluster.EdgeCluster] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('edgeCluster') }})
    gke_cluster: Optional[shared_gkecluster.GkeClusterInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gkeCluster') }})
    kubernetes_resource: Optional[shared_kubernetesresource.KubernetesResourceInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kubernetesResource') }})
    multi_cloud_cluster: Optional[shared_multicloudcluster.MultiCloudClusterInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multiCloudCluster') }})
    on_prem_cluster: Optional[shared_onpremcluster.OnPremClusterInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onPremCluster') }})
    

@dataclass_json
@dataclasses.dataclass
class MembershipEndpoint:
    r"""MembershipEndpoint
    MembershipEndpoint contains information needed to contact a Kubernetes API, endpoint and any additional Kubernetes metadata.
    """
    
    appliance_cluster: Optional[shared_appliancecluster.ApplianceCluster] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applianceCluster') }})
    edge_cluster: Optional[shared_edgecluster.EdgeCluster] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('edgeCluster') }})
    gke_cluster: Optional[shared_gkecluster.GkeCluster] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gkeCluster') }})
    kubernetes_metadata: Optional[shared_kubernetesmetadata.KubernetesMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kubernetesMetadata') }})
    kubernetes_resource: Optional[shared_kubernetesresource.KubernetesResource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kubernetesResource') }})
    multi_cloud_cluster: Optional[shared_multicloudcluster.MultiCloudCluster] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multiCloudCluster') }})
    on_prem_cluster: Optional[shared_onpremcluster.OnPremCluster] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onPremCluster') }})
    
