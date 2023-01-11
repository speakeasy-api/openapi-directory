import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2kanonymityequivalenceclass as shared_googleprivacydlpv2kanonymityequivalenceclass


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2KAnonymityHistogramBucket:
    r"""GooglePrivacyDlpV2KAnonymityHistogramBucket
    Histogram of k-anonymity equivalence classes.
    """
    
    bucket_size: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketSize') }})
    bucket_value_count: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketValueCount') }})
    bucket_values: Optional[list[shared_googleprivacydlpv2kanonymityequivalenceclass.GooglePrivacyDlpV2KAnonymityEquivalenceClass]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketValues') }})
    equivalence_class_size_lower_bound: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('equivalenceClassSizeLowerBound') }})
    equivalence_class_size_upper_bound: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('equivalenceClassSizeUpperBound') }})
    
