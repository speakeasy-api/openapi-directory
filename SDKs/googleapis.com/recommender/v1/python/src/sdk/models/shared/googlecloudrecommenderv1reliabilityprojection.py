import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudRecommenderV1ReliabilityProjectionRisksEnum(str, Enum):
    RISK_TYPE_UNSPECIFIED = "RISK_TYPE_UNSPECIFIED"
    SERVICE_DISRUPTION = "SERVICE_DISRUPTION"
    DATA_LOSS = "DATA_LOSS"
    ACCESS_DENY = "ACCESS_DENY"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRecommenderV1ReliabilityProjection:
    r"""GoogleCloudRecommenderV1ReliabilityProjection
    Contains information on the impact of a reliability recommendation.
    """
    
    details: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    risks: Optional[list[GoogleCloudRecommenderV1ReliabilityProjectionRisksEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('risks') }})
    
