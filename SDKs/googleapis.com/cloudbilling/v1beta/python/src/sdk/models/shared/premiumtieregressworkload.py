"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import usage as shared_usage
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class PremiumTierEgressWorkloadDestinationContinentEnum(str, Enum):
    r"""Where the data is sent to."""
    DESTINATION_CONTINENT_UNSPECIFIED = 'DESTINATION_CONTINENT_UNSPECIFIED'
    DESTINATION_CONTINENT_ASIA_PACIFIC = 'DESTINATION_CONTINENT_ASIA_PACIFIC'
    DESTINATION_CONTINENT_AFRICA = 'DESTINATION_CONTINENT_AFRICA'
    DESTINATION_CONTINENT_NORTH_AMERICA = 'DESTINATION_CONTINENT_NORTH_AMERICA'
    DESTINATION_CONTINENT_AUTRALIA = 'DESTINATION_CONTINENT_AUTRALIA'
    DESTINATION_CONTINENT_CENTRAL_AMERICA = 'DESTINATION_CONTINENT_CENTRAL_AMERICA'
    DESTINATION_CONTINENT_CHINA = 'DESTINATION_CONTINENT_CHINA'
    DESTINATION_CONTINENT_EASTERN_EUROPE = 'DESTINATION_CONTINENT_EASTERN_EUROPE'
    DESTINATION_CONTINENT_WESTERN_EUROPE = 'DESTINATION_CONTINENT_WESTERN_EUROPE'
    DESTINATION_CONTINENT_EMEA = 'DESTINATION_CONTINENT_EMEA'
    DESTINATION_CONTINENT_INDIA = 'DESTINATION_CONTINENT_INDIA'
    DESTINATION_CONTINENT_MIDDLE_EAST = 'DESTINATION_CONTINENT_MIDDLE_EAST'
    DESTINATION_CONTINENT_SOUTH_AMERICA = 'DESTINATION_CONTINENT_SOUTH_AMERICA'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PremiumTierEgressWorkload:
    r"""Specify Premium Tier Internet egress networking."""
    
    destination_continent: Optional[PremiumTierEgressWorkloadDestinationContinentEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('destinationContinent'), 'exclude': lambda f: f is None }})
    r"""Where the data is sent to."""  
    egress_rate: Optional[shared_usage.Usage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('egressRate'), 'exclude': lambda f: f is None }})
    r"""An amount of usage over a time frame."""  
    source_region: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('sourceRegion'), 'exclude': lambda f: f is None }})
    r"""Which [region](https://cloud.google.com/compute/docs/regions-zones) the egress data comes from."""  
    