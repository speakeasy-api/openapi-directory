import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gkenodepoolautoscalingconfig as shared_gkenodepoolautoscalingconfig
from ..shared import gkenodeconfig as shared_gkenodeconfig


@dataclass_json
@dataclasses.dataclass
class GkeNodePoolConfig:
    r"""GkeNodePoolConfig
    The configuration of a GKE node pool used by a Dataproc-on-GKE cluster (https://cloud.google.com/dataproc/docs/concepts/jobs/dataproc-gke#create-a-dataproc-on-gke-cluster).
    """
    
    autoscaling: Optional[shared_gkenodepoolautoscalingconfig.GkeNodePoolAutoscalingConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoscaling') }})
    config: Optional[shared_gkenodeconfig.GkeNodeConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    locations: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locations') }})
    
