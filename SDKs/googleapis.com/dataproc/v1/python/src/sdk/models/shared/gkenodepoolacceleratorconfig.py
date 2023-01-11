import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GkeNodePoolAcceleratorConfig:
    r"""GkeNodePoolAcceleratorConfig
    A GkeNodeConfigAcceleratorConfig represents a Hardware Accelerator request for a node pool.
    """
    
    accelerator_count: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acceleratorCount') }})
    accelerator_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acceleratorType') }})
    gpu_partition_size: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gpuPartitionSize') }})
    
