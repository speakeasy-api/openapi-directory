import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2value as shared_googleprivacydlpv2value
from ..shared import googleprivacydlpv2valuefrequency as shared_googleprivacydlpv2valuefrequency


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2LDiversityEquivalenceClass:
    r"""GooglePrivacyDlpV2LDiversityEquivalenceClass
    The set of columns' values that share the same ldiversity value.
    """
    
    equivalence_class_size: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('equivalenceClassSize') }})
    num_distinct_sensitive_values: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numDistinctSensitiveValues') }})
    quasi_ids_values: Optional[list[shared_googleprivacydlpv2value.GooglePrivacyDlpV2Value]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quasiIdsValues') }})
    top_sensitive_values: Optional[list[shared_googleprivacydlpv2valuefrequency.GooglePrivacyDlpV2ValueFrequency]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topSensitiveValues') }})
    
