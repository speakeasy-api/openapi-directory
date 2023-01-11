import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddatalabelingv1beta1annotationspec as shared_googleclouddatalabelingv1beta1annotationspec


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1AnnotationSpecSet:
    r"""GoogleCloudDatalabelingV1beta1AnnotationSpecSet
    An AnnotationSpecSet is a collection of label definitions. For example, in image classification tasks, you define a set of possible labels for images as an AnnotationSpecSet. An AnnotationSpecSet is immutable upon creation.
    """
    
    annotation_specs: Optional[list[shared_googleclouddatalabelingv1beta1annotationspec.GoogleCloudDatalabelingV1beta1AnnotationSpec]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationSpecs') }})
    blocking_resources: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blockingResources') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
