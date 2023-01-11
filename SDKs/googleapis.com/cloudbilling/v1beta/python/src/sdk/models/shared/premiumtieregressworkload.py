import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import usage as shared_usage

class PremiumTierEgressWorkloadDestinationContinentEnum(str, Enum):
    DESTINATION_CONTINENT_UNSPECIFIED = "DESTINATION_CONTINENT_UNSPECIFIED"
    DESTINATION_CONTINENT_ASIA_PACIFIC = "DESTINATION_CONTINENT_ASIA_PACIFIC"
    DESTINATION_CONTINENT_AFRICA = "DESTINATION_CONTINENT_AFRICA"
    DESTINATION_CONTINENT_NORTH_AMERICA = "DESTINATION_CONTINENT_NORTH_AMERICA"
    DESTINATION_CONTINENT_AUTRALIA = "DESTINATION_CONTINENT_AUTRALIA"
    DESTINATION_CONTINENT_CENTRAL_AMERICA = "DESTINATION_CONTINENT_CENTRAL_AMERICA"
    DESTINATION_CONTINENT_CHINA = "DESTINATION_CONTINENT_CHINA"
    DESTINATION_CONTINENT_EASTERN_EUROPE = "DESTINATION_CONTINENT_EASTERN_EUROPE"
    DESTINATION_CONTINENT_WESTERN_EUROPE = "DESTINATION_CONTINENT_WESTERN_EUROPE"
    DESTINATION_CONTINENT_EMEA = "DESTINATION_CONTINENT_EMEA"
    DESTINATION_CONTINENT_INDIA = "DESTINATION_CONTINENT_INDIA"
    DESTINATION_CONTINENT_MIDDLE_EAST = "DESTINATION_CONTINENT_MIDDLE_EAST"
    DESTINATION_CONTINENT_SOUTH_AMERICA = "DESTINATION_CONTINENT_SOUTH_AMERICA"


@dataclass_json
@dataclasses.dataclass
class PremiumTierEgressWorkload:
    r"""PremiumTierEgressWorkload
    Specify Premium Tier Internet egress networking.
    """
    
    destination_continent: Optional[PremiumTierEgressWorkloadDestinationContinentEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationContinent') }})
    egress_rate: Optional[shared_usage.Usage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('egressRate') }})
    source_region: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceRegion') }})
    
