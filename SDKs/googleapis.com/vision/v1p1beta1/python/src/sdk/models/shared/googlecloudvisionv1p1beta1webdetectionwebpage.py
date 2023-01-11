import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudvisionv1p1beta1webdetectionwebimage as shared_googlecloudvisionv1p1beta1webdetectionwebimage


@dataclass_json
@dataclasses.dataclass
class GoogleCloudVisionV1p1beta1WebDetectionWebPage:
    r"""GoogleCloudVisionV1p1beta1WebDetectionWebPage
    Metadata for web pages.
    """
    
    full_matching_images: Optional[list[shared_googlecloudvisionv1p1beta1webdetectionwebimage.GoogleCloudVisionV1p1beta1WebDetectionWebImage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullMatchingImages') }})
    page_title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageTitle') }})
    partial_matching_images: Optional[list[shared_googlecloudvisionv1p1beta1webdetectionwebimage.GoogleCloudVisionV1p1beta1WebDetectionWebImage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partialMatchingImages') }})
    score: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
