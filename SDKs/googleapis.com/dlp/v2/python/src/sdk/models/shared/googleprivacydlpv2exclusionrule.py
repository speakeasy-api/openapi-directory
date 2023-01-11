import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2dictionary as shared_googleprivacydlpv2dictionary
from ..shared import googleprivacydlpv2excludebyhotword as shared_googleprivacydlpv2excludebyhotword
from ..shared import googleprivacydlpv2excludeinfotypes as shared_googleprivacydlpv2excludeinfotypes
from ..shared import googleprivacydlpv2regex as shared_googleprivacydlpv2regex

class GooglePrivacyDlpV2ExclusionRuleMatchingTypeEnum(str, Enum):
    MATCHING_TYPE_UNSPECIFIED = "MATCHING_TYPE_UNSPECIFIED"
    MATCHING_TYPE_FULL_MATCH = "MATCHING_TYPE_FULL_MATCH"
    MATCHING_TYPE_PARTIAL_MATCH = "MATCHING_TYPE_PARTIAL_MATCH"
    MATCHING_TYPE_INVERSE_MATCH = "MATCHING_TYPE_INVERSE_MATCH"


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2ExclusionRule:
    r"""GooglePrivacyDlpV2ExclusionRule
    The rule that specifies conditions when findings of infoTypes specified in `InspectionRuleSet` are removed from results.
    """
    
    dictionary: Optional[shared_googleprivacydlpv2dictionary.GooglePrivacyDlpV2Dictionary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dictionary') }})
    exclude_by_hotword: Optional[shared_googleprivacydlpv2excludebyhotword.GooglePrivacyDlpV2ExcludeByHotword] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludeByHotword') }})
    exclude_info_types: Optional[shared_googleprivacydlpv2excludeinfotypes.GooglePrivacyDlpV2ExcludeInfoTypes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludeInfoTypes') }})
    matching_type: Optional[GooglePrivacyDlpV2ExclusionRuleMatchingTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchingType') }})
    regex: Optional[shared_googleprivacydlpv2regex.GooglePrivacyDlpV2Regex] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regex') }})
    
