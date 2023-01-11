import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import metricdescriptor as shared_metricdescriptor


@dataclass_json
@dataclasses.dataclass
class ListMetricDescriptorsResponse:
    r"""ListMetricDescriptorsResponse
    The ListMetricDescriptors response.
    """
    
    metric_descriptors: Optional[list[shared_metricdescriptor.MetricDescriptor]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricDescriptors') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
