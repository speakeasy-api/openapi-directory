import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddatalabelingv1beta1operatormetadata as shared_googleclouddatalabelingv1beta1operatormetadata


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1AnnotationMetadata:
    r"""GoogleCloudDatalabelingV1beta1AnnotationMetadata
    Additional information associated with the annotation.
    """
    
    operator_metadata: Optional[shared_googleclouddatalabelingv1beta1operatormetadata.GoogleCloudDatalabelingV1beta1OperatorMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operatorMetadata') }})
    
