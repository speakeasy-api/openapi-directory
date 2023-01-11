import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddatalabelingv1beta1dataset as shared_googleclouddatalabelingv1beta1dataset


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1ListDatasetsResponse:
    r"""GoogleCloudDatalabelingV1beta1ListDatasetsResponse
    Results of listing datasets within a project.
    """
    
    datasets: Optional[list[shared_googleclouddatalabelingv1beta1dataset.GoogleCloudDatalabelingV1beta1Dataset]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasets') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
