import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddatalabelingv1beta1annotationspec as shared_googleclouddatalabelingv1beta1annotationspec
from ..shared import googleclouddatalabelingv1beta1confusionmatrixentry as shared_googleclouddatalabelingv1beta1confusionmatrixentry


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1Row:
    r"""GoogleCloudDatalabelingV1beta1Row
    A row in the confusion matrix. Each entry in this row has the same ground truth label.
    """
    
    annotation_spec: Optional[shared_googleclouddatalabelingv1beta1annotationspec.GoogleCloudDatalabelingV1beta1AnnotationSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationSpec') }})
    entries: Optional[list[shared_googleclouddatalabelingv1beta1confusionmatrixentry.GoogleCloudDatalabelingV1beta1ConfusionMatrixEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entries') }})
    
