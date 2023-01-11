import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudvisionv1p1beta1block as shared_googlecloudvisionv1p1beta1block
from ..shared import googlecloudvisionv1p1beta1textannotationtextproperty as shared_googlecloudvisionv1p1beta1textannotationtextproperty


@dataclass_json
@dataclasses.dataclass
class GoogleCloudVisionV1p1beta1Page:
    r"""GoogleCloudVisionV1p1beta1Page
    Detected page from OCR.
    """
    
    blocks: Optional[list[shared_googlecloudvisionv1p1beta1block.GoogleCloudVisionV1p1beta1Block]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blocks') }})
    confidence: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidence') }})
    height: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    property: Optional[shared_googlecloudvisionv1p1beta1textannotationtextproperty.GoogleCloudVisionV1p1beta1TextAnnotationTextProperty] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('property') }})
    width: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    
