import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import autoscalingconfig as shared_autoscalingconfig
from ..shared import dataprocmetricconfig as shared_dataprocmetricconfig
from ..shared import encryptionconfig as shared_encryptionconfig
from ..shared import endpointconfig as shared_endpointconfig
from ..shared import gceclusterconfig as shared_gceclusterconfig
from ..shared import gkeclusterconfig as shared_gkeclusterconfig
from ..shared import nodeinitializationaction as shared_nodeinitializationaction
from ..shared import lifecycleconfig as shared_lifecycleconfig
from ..shared import instancegroupconfig as shared_instancegroupconfig
from ..shared import metastoreconfig as shared_metastoreconfig
from ..shared import securityconfig as shared_securityconfig
from ..shared import softwareconfig as shared_softwareconfig
from ..shared import endpointconfig as shared_endpointconfig
from ..shared import lifecycleconfig as shared_lifecycleconfig
from ..shared import instancegroupconfig as shared_instancegroupconfig


@dataclass_json
@dataclasses.dataclass
class ClusterConfig:
    r"""ClusterConfig
    The cluster config.
    """
    
    autoscaling_config: Optional[shared_autoscalingconfig.AutoscalingConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoscalingConfig') }})
    config_bucket: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configBucket') }})
    dataproc_metric_config: Optional[shared_dataprocmetricconfig.DataprocMetricConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataprocMetricConfig') }})
    encryption_config: Optional[shared_encryptionconfig.EncryptionConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionConfig') }})
    endpoint_config: Optional[shared_endpointconfig.EndpointConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpointConfig') }})
    gce_cluster_config: Optional[shared_gceclusterconfig.GceClusterConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gceClusterConfig') }})
    gke_cluster_config: Optional[shared_gkeclusterconfig.GkeClusterConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gkeClusterConfig') }})
    initialization_actions: Optional[list[shared_nodeinitializationaction.NodeInitializationAction]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initializationActions') }})
    lifecycle_config: Optional[shared_lifecycleconfig.LifecycleConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifecycleConfig') }})
    master_config: Optional[shared_instancegroupconfig.InstanceGroupConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('masterConfig') }})
    metastore_config: Optional[shared_metastoreconfig.MetastoreConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metastoreConfig') }})
    secondary_worker_config: Optional[shared_instancegroupconfig.InstanceGroupConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondaryWorkerConfig') }})
    security_config: Optional[shared_securityconfig.SecurityConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityConfig') }})
    software_config: Optional[shared_softwareconfig.SoftwareConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('softwareConfig') }})
    temp_bucket: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tempBucket') }})
    worker_config: Optional[shared_instancegroupconfig.InstanceGroupConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerConfig') }})
    

@dataclass_json
@dataclasses.dataclass
class ClusterConfigInput:
    r"""ClusterConfigInput
    The cluster config.
    """
    
    autoscaling_config: Optional[shared_autoscalingconfig.AutoscalingConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoscalingConfig') }})
    config_bucket: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configBucket') }})
    dataproc_metric_config: Optional[shared_dataprocmetricconfig.DataprocMetricConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataprocMetricConfig') }})
    encryption_config: Optional[shared_encryptionconfig.EncryptionConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionConfig') }})
    endpoint_config: Optional[shared_endpointconfig.EndpointConfigInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpointConfig') }})
    gce_cluster_config: Optional[shared_gceclusterconfig.GceClusterConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gceClusterConfig') }})
    gke_cluster_config: Optional[shared_gkeclusterconfig.GkeClusterConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gkeClusterConfig') }})
    initialization_actions: Optional[list[shared_nodeinitializationaction.NodeInitializationAction]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initializationActions') }})
    lifecycle_config: Optional[shared_lifecycleconfig.LifecycleConfigInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifecycleConfig') }})
    master_config: Optional[shared_instancegroupconfig.InstanceGroupConfigInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('masterConfig') }})
    metastore_config: Optional[shared_metastoreconfig.MetastoreConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metastoreConfig') }})
    secondary_worker_config: Optional[shared_instancegroupconfig.InstanceGroupConfigInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondaryWorkerConfig') }})
    security_config: Optional[shared_securityconfig.SecurityConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityConfig') }})
    software_config: Optional[shared_softwareconfig.SoftwareConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('softwareConfig') }})
    temp_bucket: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tempBucket') }})
    worker_config: Optional[shared_instancegroupconfig.InstanceGroupConfigInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerConfig') }})
    
