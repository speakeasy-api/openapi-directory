import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2infotype as shared_googleprivacydlpv2infotype
from ..shared import googleprivacydlpv2inspectionrule as shared_googleprivacydlpv2inspectionrule


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2InspectionRuleSet:
    r"""GooglePrivacyDlpV2InspectionRuleSet
    Rule set for modifying a set of infoTypes to alter behavior under certain circumstances, depending on the specific details of the rules within the set.
    """
    
    info_types: Optional[list[shared_googleprivacydlpv2infotype.GooglePrivacyDlpV2InfoType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('infoTypes') }})
    rules: Optional[list[shared_googleprivacydlpv2inspectionrule.GooglePrivacyDlpV2InspectionRule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    
