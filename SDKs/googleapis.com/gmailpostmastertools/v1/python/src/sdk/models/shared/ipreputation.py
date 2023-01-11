import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class IPReputationReputationEnum(str, Enum):
    REPUTATION_CATEGORY_UNSPECIFIED = "REPUTATION_CATEGORY_UNSPECIFIED"
    HIGH = "HIGH"
    MEDIUM = "MEDIUM"
    LOW = "LOW"
    BAD = "BAD"


@dataclass_json
@dataclasses.dataclass
class IPReputation:
    r"""IPReputation
    IP Reputation information for a set of IPs in a specific reputation category.
    """
    
    ip_count: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipCount') }})
    reputation: Optional[IPReputationReputationEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reputation') }})
    sample_ips: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampleIps') }})
    
