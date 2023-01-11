import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2regex as shared_googleprivacydlpv2regex
from ..shared import googleprivacydlpv2likelihoodadjustment as shared_googleprivacydlpv2likelihoodadjustment
from ..shared import googleprivacydlpv2proximity as shared_googleprivacydlpv2proximity


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2HotwordRule:
    r"""GooglePrivacyDlpV2HotwordRule
    The rule that adjusts the likelihood of findings within a certain proximity of hotwords.
    """
    
    hotword_regex: Optional[shared_googleprivacydlpv2regex.GooglePrivacyDlpV2Regex] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hotwordRegex') }})
    likelihood_adjustment: Optional[shared_googleprivacydlpv2likelihoodadjustment.GooglePrivacyDlpV2LikelihoodAdjustment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('likelihoodAdjustment') }})
    proximity: Optional[shared_googleprivacydlpv2proximity.GooglePrivacyDlpV2Proximity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proximity') }})
    
