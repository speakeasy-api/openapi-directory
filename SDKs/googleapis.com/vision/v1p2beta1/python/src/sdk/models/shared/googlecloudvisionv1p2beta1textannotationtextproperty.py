import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudvisionv1p2beta1textannotationdetectedbreak as shared_googlecloudvisionv1p2beta1textannotationdetectedbreak
from ..shared import googlecloudvisionv1p2beta1textannotationdetectedlanguage as shared_googlecloudvisionv1p2beta1textannotationdetectedlanguage


@dataclass_json
@dataclasses.dataclass
class GoogleCloudVisionV1p2beta1TextAnnotationTextProperty:
    r"""GoogleCloudVisionV1p2beta1TextAnnotationTextProperty
    Additional information detected on the structural component.
    """
    
    detected_break: Optional[shared_googlecloudvisionv1p2beta1textannotationdetectedbreak.GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreak] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectedBreak') }})
    detected_languages: Optional[list[shared_googlecloudvisionv1p2beta1textannotationdetectedlanguage.GoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectedLanguages') }})
    
