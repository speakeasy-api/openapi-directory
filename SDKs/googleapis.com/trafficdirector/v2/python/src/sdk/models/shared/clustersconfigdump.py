import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dynamiccluster as shared_dynamiccluster
from ..shared import staticcluster as shared_staticcluster


@dataclass_json
@dataclasses.dataclass
class ClustersConfigDump:
    r"""ClustersConfigDump
    Envoy's cluster manager fills this message with all currently known clusters. Cluster configuration information can be used to recreate an Envoy configuration by populating all clusters as static clusters or by returning them in a CDS response.
    """
    
    dynamic_active_clusters: Optional[list[shared_dynamiccluster.DynamicCluster]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dynamicActiveClusters') }})
    dynamic_warming_clusters: Optional[list[shared_dynamiccluster.DynamicCluster]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dynamicWarmingClusters') }})
    static_clusters: Optional[list[shared_staticcluster.StaticCluster]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('staticClusters') }})
    version_info: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionInfo') }})
    
