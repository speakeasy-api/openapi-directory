import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import clusterselector as shared_clusterselector
from ..shared import managedcluster as shared_managedcluster
from ..shared import managedcluster as shared_managedcluster


@dataclass_json
@dataclasses.dataclass
class WorkflowTemplatePlacement:
    r"""WorkflowTemplatePlacement
    Specifies workflow execution target.Either managed_cluster or cluster_selector is required.
    """
    
    cluster_selector: Optional[shared_clusterselector.ClusterSelector] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterSelector') }})
    managed_cluster: Optional[shared_managedcluster.ManagedCluster] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedCluster') }})
    

@dataclass_json
@dataclasses.dataclass
class WorkflowTemplatePlacementInput:
    r"""WorkflowTemplatePlacementInput
    Specifies workflow execution target.Either managed_cluster or cluster_selector is required.
    """
    
    cluster_selector: Optional[shared_clusterselector.ClusterSelector] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterSelector') }})
    managed_cluster: Optional[shared_managedcluster.ManagedClusterInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedCluster') }})
    
