import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudvisionv1p2beta1block as shared_googlecloudvisionv1p2beta1block
from ..shared import googlecloudvisionv1p2beta1textannotationtextproperty as shared_googlecloudvisionv1p2beta1textannotationtextproperty


@dataclass_json
@dataclasses.dataclass
class GoogleCloudVisionV1p2beta1Page:
    r"""GoogleCloudVisionV1p2beta1Page
    Detected page from OCR.
    """
    
    blocks: Optional[list[shared_googlecloudvisionv1p2beta1block.GoogleCloudVisionV1p2beta1Block]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blocks') }})
    confidence: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidence') }})
    height: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    property: Optional[shared_googlecloudvisionv1p2beta1textannotationtextproperty.GoogleCloudVisionV1p2beta1TextAnnotationTextProperty] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('property') }})
    width: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    
