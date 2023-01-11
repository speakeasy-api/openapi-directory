import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddatalabelingv1beta1annotationspecset as shared_googleclouddatalabelingv1beta1annotationspecset


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse:
    r"""GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse
    Results of listing annotation spec set under a project.
    """
    
    annotation_spec_sets: Optional[list[shared_googleclouddatalabelingv1beta1annotationspecset.GoogleCloudDatalabelingV1beta1AnnotationSpecSet]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationSpecSets') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
