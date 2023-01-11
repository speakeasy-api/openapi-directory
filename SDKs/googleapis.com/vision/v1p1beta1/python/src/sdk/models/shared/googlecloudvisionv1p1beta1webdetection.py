import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudvisionv1p1beta1webdetectionweblabel as shared_googlecloudvisionv1p1beta1webdetectionweblabel
from ..shared import googlecloudvisionv1p1beta1webdetectionwebimage as shared_googlecloudvisionv1p1beta1webdetectionwebimage
from ..shared import googlecloudvisionv1p1beta1webdetectionwebpage as shared_googlecloudvisionv1p1beta1webdetectionwebpage
from ..shared import googlecloudvisionv1p1beta1webdetectionwebentity as shared_googlecloudvisionv1p1beta1webdetectionwebentity


@dataclass_json
@dataclasses.dataclass
class GoogleCloudVisionV1p1beta1WebDetection:
    r"""GoogleCloudVisionV1p1beta1WebDetection
    Relevant information for the image from the Internet.
    """
    
    best_guess_labels: Optional[list[shared_googlecloudvisionv1p1beta1webdetectionweblabel.GoogleCloudVisionV1p1beta1WebDetectionWebLabel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bestGuessLabels') }})
    full_matching_images: Optional[list[shared_googlecloudvisionv1p1beta1webdetectionwebimage.GoogleCloudVisionV1p1beta1WebDetectionWebImage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullMatchingImages') }})
    pages_with_matching_images: Optional[list[shared_googlecloudvisionv1p1beta1webdetectionwebpage.GoogleCloudVisionV1p1beta1WebDetectionWebPage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagesWithMatchingImages') }})
    partial_matching_images: Optional[list[shared_googlecloudvisionv1p1beta1webdetectionwebimage.GoogleCloudVisionV1p1beta1WebDetectionWebImage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partialMatchingImages') }})
    visually_similar_images: Optional[list[shared_googlecloudvisionv1p1beta1webdetectionwebimage.GoogleCloudVisionV1p1beta1WebDetectionWebImage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visuallySimilarImages') }})
    web_entities: Optional[list[shared_googlecloudvisionv1p1beta1webdetectionwebentity.GoogleCloudVisionV1p1beta1WebDetectionWebEntity]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webEntities') }})
    
