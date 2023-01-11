import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2detectionrule as shared_googleprivacydlpv2detectionrule
from ..shared import googleprivacydlpv2dictionary as shared_googleprivacydlpv2dictionary
from ..shared import googleprivacydlpv2infotype as shared_googleprivacydlpv2infotype
from ..shared import googleprivacydlpv2regex as shared_googleprivacydlpv2regex
from ..shared import googleprivacydlpv2storedtype as shared_googleprivacydlpv2storedtype

class GooglePrivacyDlpV2CustomInfoTypeExclusionTypeEnum(str, Enum):
    EXCLUSION_TYPE_UNSPECIFIED = "EXCLUSION_TYPE_UNSPECIFIED"
    EXCLUSION_TYPE_EXCLUDE = "EXCLUSION_TYPE_EXCLUDE"

class GooglePrivacyDlpV2CustomInfoTypeLikelihoodEnum(str, Enum):
    LIKELIHOOD_UNSPECIFIED = "LIKELIHOOD_UNSPECIFIED"
    VERY_UNLIKELY = "VERY_UNLIKELY"
    UNLIKELY = "UNLIKELY"
    POSSIBLE = "POSSIBLE"
    LIKELY = "LIKELY"
    VERY_LIKELY = "VERY_LIKELY"


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2CustomInfoType:
    r"""GooglePrivacyDlpV2CustomInfoType
    Custom information type provided by the user. Used to find domain-specific sensitive information configurable to the data in question.
    """
    
    detection_rules: Optional[list[shared_googleprivacydlpv2detectionrule.GooglePrivacyDlpV2DetectionRule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectionRules') }})
    dictionary: Optional[shared_googleprivacydlpv2dictionary.GooglePrivacyDlpV2Dictionary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dictionary') }})
    exclusion_type: Optional[GooglePrivacyDlpV2CustomInfoTypeExclusionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exclusionType') }})
    info_type: Optional[shared_googleprivacydlpv2infotype.GooglePrivacyDlpV2InfoType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('infoType') }})
    likelihood: Optional[GooglePrivacyDlpV2CustomInfoTypeLikelihoodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('likelihood') }})
    regex: Optional[shared_googleprivacydlpv2regex.GooglePrivacyDlpV2Regex] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regex') }})
    stored_type: Optional[shared_googleprivacydlpv2storedtype.GooglePrivacyDlpV2StoredType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storedType') }})
    surrogate_type: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('surrogateType') }})
    
