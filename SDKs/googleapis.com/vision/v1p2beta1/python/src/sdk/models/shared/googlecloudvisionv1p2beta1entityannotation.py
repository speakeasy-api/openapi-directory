import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudvisionv1p2beta1boundingpoly as shared_googlecloudvisionv1p2beta1boundingpoly
from ..shared import googlecloudvisionv1p2beta1locationinfo as shared_googlecloudvisionv1p2beta1locationinfo
from ..shared import googlecloudvisionv1p2beta1property as shared_googlecloudvisionv1p2beta1property


@dataclass_json
@dataclasses.dataclass
class GoogleCloudVisionV1p2beta1EntityAnnotation:
    r"""GoogleCloudVisionV1p2beta1EntityAnnotation
    Set of detected entity features.
    """
    
    bounding_poly: Optional[shared_googlecloudvisionv1p2beta1boundingpoly.GoogleCloudVisionV1p2beta1BoundingPoly] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boundingPoly') }})
    confidence: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidence') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    locale: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locale') }})
    locations: Optional[list[shared_googlecloudvisionv1p2beta1locationinfo.GoogleCloudVisionV1p2beta1LocationInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locations') }})
    mid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mid') }})
    properties: Optional[list[shared_googlecloudvisionv1p2beta1property.GoogleCloudVisionV1p2beta1Property]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    score: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    topicality: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topicality') }})
    
