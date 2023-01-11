import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import compensationhistogramresult as shared_compensationhistogramresult
from ..shared import customattributehistogramresult as shared_customattributehistogramresult
from ..shared import histogramresult as shared_histogramresult


@dataclass_json
@dataclasses.dataclass
class HistogramResults:
    r"""HistogramResults
    Output only. Histogram results that match HistogramFacets specified in SearchJobsRequest.
    """
    
    compensation_histogram_results: Optional[list[shared_compensationhistogramresult.CompensationHistogramResult]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compensationHistogramResults') }})
    custom_attribute_histogram_results: Optional[list[shared_customattributehistogramresult.CustomAttributeHistogramResult]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customAttributeHistogramResults') }})
    simple_histogram_results: Optional[list[shared_histogramresult.HistogramResult]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('simpleHistogramResults') }})
    
