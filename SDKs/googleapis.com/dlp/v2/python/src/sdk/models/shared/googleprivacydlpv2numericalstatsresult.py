import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2value as shared_googleprivacydlpv2value


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2NumericalStatsResult:
    r"""GooglePrivacyDlpV2NumericalStatsResult
    Result of the numerical stats computation.
    """
    
    max_value: Optional[shared_googleprivacydlpv2value.GooglePrivacyDlpV2Value] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxValue') }})
    min_value: Optional[shared_googleprivacydlpv2value.GooglePrivacyDlpV2Value] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minValue') }})
    quantile_values: Optional[list[shared_googleprivacydlpv2value.GooglePrivacyDlpV2Value]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantileValues') }})
    
