import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AggregationInfoAggregationIntervalEnum(str, Enum):
    AGGREGATION_INTERVAL_UNSPECIFIED = "AGGREGATION_INTERVAL_UNSPECIFIED"
    DAILY = "DAILY"
    MONTHLY = "MONTHLY"

class AggregationInfoAggregationLevelEnum(str, Enum):
    AGGREGATION_LEVEL_UNSPECIFIED = "AGGREGATION_LEVEL_UNSPECIFIED"
    ACCOUNT = "ACCOUNT"
    PROJECT = "PROJECT"


@dataclass_json
@dataclasses.dataclass
class AggregationInfo:
    r"""AggregationInfo
    Represents the aggregation level and interval for pricing of a single SKU.
    """
    
    aggregation_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregationCount') }})
    aggregation_interval: Optional[AggregationInfoAggregationIntervalEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregationInterval') }})
    aggregation_level: Optional[AggregationInfoAggregationLevelEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregationLevel') }})
    
