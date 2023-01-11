import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig:
    r"""GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig
    Annotation spec set with the setting of allowing multi labels or not.
    """
    
    allow_multi_label: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowMultiLabel') }})
    annotation_spec_set: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationSpecSet') }})
    
