import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import clusterconfig as shared_clusterconfig
from ..shared import clustermetrics as shared_clustermetrics
from ..shared import clusterstatus as shared_clusterstatus
from ..shared import virtualclusterconfig as shared_virtualclusterconfig
from ..shared import clusterconfig as shared_clusterconfig


@dataclass_json
@dataclasses.dataclass
class Cluster:
    r"""Cluster
    Describes the identifying information, config, and status of a Dataproc cluster
    """
    
    cluster_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterName') }})
    cluster_uuid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterUuid') }})
    config: Optional[shared_clusterconfig.ClusterConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    metrics: Optional[shared_clustermetrics.ClusterMetrics] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    project_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    status: Optional[shared_clusterstatus.ClusterStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_history: Optional[list[shared_clusterstatus.ClusterStatus]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusHistory') }})
    virtual_cluster_config: Optional[shared_virtualclusterconfig.VirtualClusterConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualClusterConfig') }})
    

@dataclass_json
@dataclasses.dataclass
class ClusterInput:
    r"""ClusterInput
    Describes the identifying information, config, and status of a Dataproc cluster
    """
    
    cluster_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterName') }})
    config: Optional[shared_clusterconfig.ClusterConfigInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    metrics: Optional[shared_clustermetrics.ClusterMetrics] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    project_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    virtual_cluster_config: Optional[shared_virtualclusterconfig.VirtualClusterConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualClusterConfig') }})
    
