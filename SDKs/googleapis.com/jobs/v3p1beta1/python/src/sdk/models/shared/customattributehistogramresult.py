import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import numericbucketingresult as shared_numericbucketingresult


@dataclass_json
@dataclasses.dataclass
class CustomAttributeHistogramResult:
    r"""CustomAttributeHistogramResult
    Output only. Custom attribute histogram result.
    """
    
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    long_value_histogram_result: Optional[shared_numericbucketingresult.NumericBucketingResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longValueHistogramResult') }})
    string_value_histogram_result: Optional[dict[str, int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringValueHistogramResult') }})
    
