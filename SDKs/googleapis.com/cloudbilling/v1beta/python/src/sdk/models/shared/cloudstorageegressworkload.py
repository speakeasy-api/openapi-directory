import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import usage as shared_usage

class CloudStorageEgressWorkloadDestinationContinentEnum(str, Enum):
    DESTINATION_CONTINENT_UNSPECIFIED = "DESTINATION_CONTINENT_UNSPECIFIED"
    DESTINATION_CONTINENT_ASIA_PACIFIC = "DESTINATION_CONTINENT_ASIA_PACIFIC"
    DESTINATION_CONTINENT_AUTRALIA = "DESTINATION_CONTINENT_AUTRALIA"
    DESTINATION_CONTINENT_EUROPE = "DESTINATION_CONTINENT_EUROPE"
    DESTINATION_CONTINENT_NORTH_AMERICA = "DESTINATION_CONTINENT_NORTH_AMERICA"
    DESTINATION_CONTINENT_SOUTH_AMERICA = "DESTINATION_CONTINENT_SOUTH_AMERICA"

class CloudStorageEgressWorkloadSourceContinentEnum(str, Enum):
    SOURCE_CONTINENT_UNSPECIFIED = "SOURCE_CONTINENT_UNSPECIFIED"
    SOURCE_CONTINENT_ASIA_PACIFIC = "SOURCE_CONTINENT_ASIA_PACIFIC"
    SOURCE_CONTINENT_AUSTRALIA = "SOURCE_CONTINENT_AUSTRALIA"
    SOURCE_CONTINENT_EUROPE = "SOURCE_CONTINENT_EUROPE"
    SOURCE_CONTINENT_NORTH_AMERICA = "SOURCE_CONTINENT_NORTH_AMERICA"
    SOURCE_CONTINENT_SOUTH_AMERICA = "SOURCE_CONTINENT_SOUTH_AMERICA"


@dataclass_json
@dataclasses.dataclass
class CloudStorageEgressWorkload:
    r"""CloudStorageEgressWorkload
    Specification of a network type. Network egress within Google Cloud applies when you move or copy data from one Cloud Storage bucket to another or when another Google Cloud service accesses data in your Cloud Storage bucket.This includes the network egress within Google Cloud and the general network usage.
    """
    
    destination_continent: Optional[CloudStorageEgressWorkloadDestinationContinentEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationContinent') }})
    egress_rate: Optional[shared_usage.Usage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('egressRate') }})
    source_continent: Optional[CloudStorageEgressWorkloadSourceContinentEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceContinent') }})
    
