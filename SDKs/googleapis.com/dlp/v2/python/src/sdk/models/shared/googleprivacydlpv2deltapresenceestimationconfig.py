import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2statisticaltable as shared_googleprivacydlpv2statisticaltable
from ..shared import googleprivacydlpv2quasiid as shared_googleprivacydlpv2quasiid


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2DeltaPresenceEstimationConfig:
    r"""GooglePrivacyDlpV2DeltaPresenceEstimationConfig
    δ-presence metric, used to estimate how likely it is for an attacker to figure out that one given individual appears in a de-identified dataset. Similarly to the k-map metric, we cannot compute δ-presence exactly without knowing the attack dataset, so we use a statistical model instead.
    """
    
    auxiliary_tables: Optional[list[shared_googleprivacydlpv2statisticaltable.GooglePrivacyDlpV2StatisticalTable]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auxiliaryTables') }})
    quasi_ids: Optional[list[shared_googleprivacydlpv2quasiid.GooglePrivacyDlpV2QuasiID]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quasiIds') }})
    region_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionCode') }})
    
