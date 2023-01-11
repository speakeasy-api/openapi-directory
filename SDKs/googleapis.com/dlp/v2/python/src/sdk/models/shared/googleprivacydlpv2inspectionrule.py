import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2exclusionrule as shared_googleprivacydlpv2exclusionrule
from ..shared import googleprivacydlpv2hotwordrule as shared_googleprivacydlpv2hotwordrule


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2InspectionRule:
    r"""GooglePrivacyDlpV2InspectionRule
    A single inspection rule to be applied to infoTypes, specified in `InspectionRuleSet`.
    """
    
    exclusion_rule: Optional[shared_googleprivacydlpv2exclusionrule.GooglePrivacyDlpV2ExclusionRule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exclusionRule') }})
    hotword_rule: Optional[shared_googleprivacydlpv2hotwordrule.GooglePrivacyDlpV2HotwordRule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hotwordRule') }})
    
