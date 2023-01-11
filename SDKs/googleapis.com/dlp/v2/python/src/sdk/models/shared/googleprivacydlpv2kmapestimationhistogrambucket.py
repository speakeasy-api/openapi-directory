import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2kmapestimationquasiidvalues as shared_googleprivacydlpv2kmapestimationquasiidvalues


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2KMapEstimationHistogramBucket:
    r"""GooglePrivacyDlpV2KMapEstimationHistogramBucket
    A KMapEstimationHistogramBucket message with the following values: min_anonymity: 3 max_anonymity: 5 frequency: 42 means that there are 42 records whose quasi-identifier values correspond to 3, 4 or 5 people in the overlying population. An important particular case is when min_anonymity = max_anonymity = 1: the frequency field then corresponds to the number of uniquely identifiable records.
    """
    
    bucket_size: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketSize') }})
    bucket_value_count: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketValueCount') }})
    bucket_values: Optional[list[shared_googleprivacydlpv2kmapestimationquasiidvalues.GooglePrivacyDlpV2KMapEstimationQuasiIDValues]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketValues') }})
    max_anonymity: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxAnonymity') }})
    min_anonymity: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minAnonymity') }})
    
