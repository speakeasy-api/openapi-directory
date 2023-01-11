import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddatalabelingv1beta1examplecomparison as shared_googleclouddatalabelingv1beta1examplecomparison


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse:
    r"""GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse
    Results of searching example comparisons.
    """
    
    example_comparisons: Optional[list[shared_googleclouddatalabelingv1beta1examplecomparison.GoogleCloudDatalabelingV1beta1ExampleComparison]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exampleComparisons') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
