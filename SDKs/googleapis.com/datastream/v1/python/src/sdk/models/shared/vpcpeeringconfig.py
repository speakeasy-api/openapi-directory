import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class VpcPeeringConfig:
    r"""VpcPeeringConfig
    The VPC Peering configuration is used to create VPC peering between Datastream and the consumer's VPC.
    """
    
    subnet: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnet') }})
    vpc: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpc') }})
    
