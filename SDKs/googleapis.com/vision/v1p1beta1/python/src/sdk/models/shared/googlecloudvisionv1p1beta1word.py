import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudvisionv1p1beta1boundingpoly as shared_googlecloudvisionv1p1beta1boundingpoly
from ..shared import googlecloudvisionv1p1beta1textannotationtextproperty as shared_googlecloudvisionv1p1beta1textannotationtextproperty
from ..shared import googlecloudvisionv1p1beta1symbol as shared_googlecloudvisionv1p1beta1symbol


@dataclass_json
@dataclasses.dataclass
class GoogleCloudVisionV1p1beta1Word:
    r"""GoogleCloudVisionV1p1beta1Word
    A word representation.
    """
    
    bounding_box: Optional[shared_googlecloudvisionv1p1beta1boundingpoly.GoogleCloudVisionV1p1beta1BoundingPoly] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boundingBox') }})
    confidence: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidence') }})
    property: Optional[shared_googlecloudvisionv1p1beta1textannotationtextproperty.GoogleCloudVisionV1p1beta1TextAnnotationTextProperty] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('property') }})
    symbols: Optional[list[shared_googlecloudvisionv1p1beta1symbol.GoogleCloudVisionV1p1beta1Symbol]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('symbols') }})
    
