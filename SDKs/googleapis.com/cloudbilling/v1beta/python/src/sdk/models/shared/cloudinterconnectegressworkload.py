import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import usage as shared_usage

class CloudInterconnectEgressWorkloadInterconnectConnectionLocationEnum(str, Enum):
    INTERCONNECT_CONNECTION_LOCATION_UNSPECIFIED = "INTERCONNECT_CONNECTION_LOCATION_UNSPECIFIED"
    INTERCONNECT_CONNECTION_LOCATION_ASIA = "INTERCONNECT_CONNECTION_LOCATION_ASIA"
    INTERCONNECT_CONNECTION_LOCATION_EUROPE = "INTERCONNECT_CONNECTION_LOCATION_EUROPE"
    INTERCONNECT_CONNECTION_LOCATION_NORTH_AMERICA = "INTERCONNECT_CONNECTION_LOCATION_NORTH_AMERICA"
    INTERCONNECT_CONNECTION_LOCATION_SOUTH_AMERICA = "INTERCONNECT_CONNECTION_LOCATION_SOUTH_AMERICA"
    INTERCONNECT_CONNECTION_LOCATION_AUSTRALIA = "INTERCONNECT_CONNECTION_LOCATION_AUSTRALIA"


@dataclass_json
@dataclasses.dataclass
class CloudInterconnectEgressWorkload:
    r"""CloudInterconnectEgressWorkload
    The interconnect egress only includes the Interconnect Egress. Please use the standard egress traffic interface to specify your standard egress usage.
    """
    
    egress_rate: Optional[shared_usage.Usage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('egressRate') }})
    interconnect_connection_location: Optional[CloudInterconnectEgressWorkloadInterconnectConnectionLocationEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interconnectConnectionLocation') }})
    
