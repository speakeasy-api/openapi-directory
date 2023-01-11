import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import numericbucketingoption as shared_numericbucketingoption


@dataclass_json
@dataclasses.dataclass
class CustomAttributeHistogramRequest:
    r"""CustomAttributeHistogramRequest
    Custom attributes histogram request. An error is thrown if neither string_value_histogram or long_value_histogram_bucketing_option has been defined.
    """
    
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    long_value_histogram_bucketing_option: Optional[shared_numericbucketingoption.NumericBucketingOption] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longValueHistogramBucketingOption') }})
    string_value_histogram: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringValueHistogram') }})
    
