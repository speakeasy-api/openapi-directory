import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2custominfotype as shared_googleprivacydlpv2custominfotype
from ..shared import googleprivacydlpv2infotype as shared_googleprivacydlpv2infotype
from ..shared import googleprivacydlpv2findinglimits as shared_googleprivacydlpv2findinglimits
from ..shared import googleprivacydlpv2inspectionruleset as shared_googleprivacydlpv2inspectionruleset

class GooglePrivacyDlpV2InspectConfigContentOptionsEnum(str, Enum):
    CONTENT_UNSPECIFIED = "CONTENT_UNSPECIFIED"
    CONTENT_TEXT = "CONTENT_TEXT"
    CONTENT_IMAGE = "CONTENT_IMAGE"

class GooglePrivacyDlpV2InspectConfigMinLikelihoodEnum(str, Enum):
    LIKELIHOOD_UNSPECIFIED = "LIKELIHOOD_UNSPECIFIED"
    VERY_UNLIKELY = "VERY_UNLIKELY"
    UNLIKELY = "UNLIKELY"
    POSSIBLE = "POSSIBLE"
    LIKELY = "LIKELY"
    VERY_LIKELY = "VERY_LIKELY"


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2InspectConfig:
    r"""GooglePrivacyDlpV2InspectConfig
    Configuration description of the scanning process. When used with redactContent only info_types and min_likelihood are currently used.
    """
    
    content_options: Optional[list[GooglePrivacyDlpV2InspectConfigContentOptionsEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentOptions') }})
    custom_info_types: Optional[list[shared_googleprivacydlpv2custominfotype.GooglePrivacyDlpV2CustomInfoType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customInfoTypes') }})
    exclude_info_types: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludeInfoTypes') }})
    include_quote: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeQuote') }})
    info_types: Optional[list[shared_googleprivacydlpv2infotype.GooglePrivacyDlpV2InfoType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('infoTypes') }})
    limits: Optional[shared_googleprivacydlpv2findinglimits.GooglePrivacyDlpV2FindingLimits] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limits') }})
    min_likelihood: Optional[GooglePrivacyDlpV2InspectConfigMinLikelihoodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minLikelihood') }})
    rule_set: Optional[list[shared_googleprivacydlpv2inspectionruleset.GooglePrivacyDlpV2InspectionRuleSet]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleSet') }})
    
