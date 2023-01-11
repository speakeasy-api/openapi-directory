import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CustomRankingInfoImportanceLevelEnum(str, Enum):
    IMPORTANCE_LEVEL_UNSPECIFIED = "IMPORTANCE_LEVEL_UNSPECIFIED"
    NONE = "NONE"
    LOW = "LOW"
    MILD = "MILD"
    MEDIUM = "MEDIUM"
    HIGH = "HIGH"
    EXTREME = "EXTREME"


@dataclass_json
@dataclasses.dataclass
class CustomRankingInfo:
    r"""CustomRankingInfo
    Input only. Custom ranking information for SearchJobsRequest.
    """
    
    importance_level: Optional[CustomRankingInfoImportanceLevelEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('importanceLevel') }})
    ranking_expression: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rankingExpression') }})
    
