import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudvisionv1p1beta1boundingpoly as shared_googlecloudvisionv1p1beta1boundingpoly
from ..shared import googlecloudvisionv1p1beta1paragraph as shared_googlecloudvisionv1p1beta1paragraph
from ..shared import googlecloudvisionv1p1beta1textannotationtextproperty as shared_googlecloudvisionv1p1beta1textannotationtextproperty

class GoogleCloudVisionV1p1beta1BlockBlockTypeEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    TEXT = "TEXT"
    TABLE = "TABLE"
    PICTURE = "PICTURE"
    RULER = "RULER"
    BARCODE = "BARCODE"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudVisionV1p1beta1Block:
    r"""GoogleCloudVisionV1p1beta1Block
    Logical element on the page.
    """
    
    block_type: Optional[GoogleCloudVisionV1p1beta1BlockBlockTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blockType') }})
    bounding_box: Optional[shared_googlecloudvisionv1p1beta1boundingpoly.GoogleCloudVisionV1p1beta1BoundingPoly] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boundingBox') }})
    confidence: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidence') }})
    paragraphs: Optional[list[shared_googlecloudvisionv1p1beta1paragraph.GoogleCloudVisionV1p1beta1Paragraph]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paragraphs') }})
    property: Optional[shared_googlecloudvisionv1p1beta1textannotationtextproperty.GoogleCloudVisionV1p1beta1TextAnnotationTextProperty] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('property') }})
    
