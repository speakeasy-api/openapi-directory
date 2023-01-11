import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class QosPolicy:
    r"""QosPolicy
    QOS policy parameters.
    """
    
    bandwidth_gbps: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandwidthGbps') }})
    
