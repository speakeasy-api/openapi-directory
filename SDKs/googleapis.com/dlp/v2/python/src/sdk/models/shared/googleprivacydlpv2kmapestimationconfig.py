import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2auxiliarytable as shared_googleprivacydlpv2auxiliarytable
from ..shared import googleprivacydlpv2taggedfield as shared_googleprivacydlpv2taggedfield


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2KMapEstimationConfig:
    r"""GooglePrivacyDlpV2KMapEstimationConfig
    Reidentifiability metric. This corresponds to a risk model similar to what is called \"journalist risk\" in the literature, except the attack dataset is statistically modeled instead of being perfectly known. This can be done using publicly available data (like the US Census), or using a custom statistical model (indicated as one or several BigQuery tables), or by extrapolating from the distribution of values in the input dataset.
    """
    
    auxiliary_tables: Optional[list[shared_googleprivacydlpv2auxiliarytable.GooglePrivacyDlpV2AuxiliaryTable]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auxiliaryTables') }})
    quasi_ids: Optional[list[shared_googleprivacydlpv2taggedfield.GooglePrivacyDlpV2TaggedField]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quasiIds') }})
    region_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionCode') }})
    
