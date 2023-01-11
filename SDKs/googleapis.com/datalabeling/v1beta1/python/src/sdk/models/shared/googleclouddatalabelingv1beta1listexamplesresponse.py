import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddatalabelingv1beta1example as shared_googleclouddatalabelingv1beta1example


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1ListExamplesResponse:
    r"""GoogleCloudDatalabelingV1beta1ListExamplesResponse
    Results of listing Examples in and annotated dataset.
    """
    
    examples: Optional[list[shared_googleclouddatalabelingv1beta1example.GoogleCloudDatalabelingV1beta1Example]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('examples') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
