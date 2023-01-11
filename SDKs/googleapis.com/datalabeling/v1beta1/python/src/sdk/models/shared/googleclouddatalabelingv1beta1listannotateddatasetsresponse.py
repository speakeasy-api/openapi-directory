import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddatalabelingv1beta1annotateddataset as shared_googleclouddatalabelingv1beta1annotateddataset


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse:
    r"""GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse
    Results of listing annotated datasets for a dataset.
    """
    
    annotated_datasets: Optional[list[shared_googleclouddatalabelingv1beta1annotateddataset.GoogleCloudDatalabelingV1beta1AnnotatedDataset]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotatedDatasets') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
