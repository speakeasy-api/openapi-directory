import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudRecaptchaenterpriseV1RiskAnalysisReasonsEnum(str, Enum):
    CLASSIFICATION_REASON_UNSPECIFIED = "CLASSIFICATION_REASON_UNSPECIFIED"
    AUTOMATION = "AUTOMATION"
    UNEXPECTED_ENVIRONMENT = "UNEXPECTED_ENVIRONMENT"
    TOO_MUCH_TRAFFIC = "TOO_MUCH_TRAFFIC"
    UNEXPECTED_USAGE_PATTERNS = "UNEXPECTED_USAGE_PATTERNS"
    LOW_CONFIDENCE_SCORE = "LOW_CONFIDENCE_SCORE"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRecaptchaenterpriseV1RiskAnalysis:
    r"""GoogleCloudRecaptchaenterpriseV1RiskAnalysis
    Risk analysis result for an event.
    """
    
    reasons: Optional[list[GoogleCloudRecaptchaenterpriseV1RiskAnalysisReasonsEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reasons') }})
    score: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    
