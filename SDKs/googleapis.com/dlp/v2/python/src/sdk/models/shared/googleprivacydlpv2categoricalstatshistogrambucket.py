import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2valuefrequency as shared_googleprivacydlpv2valuefrequency


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2CategoricalStatsHistogramBucket:
    r"""GooglePrivacyDlpV2CategoricalStatsHistogramBucket
    Histogram of value frequencies in the column.
    """
    
    bucket_size: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketSize') }})
    bucket_value_count: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketValueCount') }})
    bucket_values: Optional[list[shared_googleprivacydlpv2valuefrequency.GooglePrivacyDlpV2ValueFrequency]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketValues') }})
    value_frequency_lower_bound: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueFrequencyLowerBound') }})
    value_frequency_upper_bound: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueFrequencyUpperBound') }})
    
