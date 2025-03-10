"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import googlecloudvisionv1p2beta1webdetectionwebentity as shared_googlecloudvisionv1p2beta1webdetectionwebentity
from ..shared import googlecloudvisionv1p2beta1webdetectionwebimage as shared_googlecloudvisionv1p2beta1webdetectionwebimage
from ..shared import googlecloudvisionv1p2beta1webdetectionweblabel as shared_googlecloudvisionv1p2beta1webdetectionweblabel
from ..shared import googlecloudvisionv1p2beta1webdetectionwebpage as shared_googlecloudvisionv1p2beta1webdetectionwebpage
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GoogleCloudVisionV1p2beta1WebDetection:
    r"""Relevant information for the image from the Internet."""
    
    best_guess_labels: Optional[list[shared_googlecloudvisionv1p2beta1webdetectionweblabel.GoogleCloudVisionV1p2beta1WebDetectionWebLabel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('bestGuessLabels'), 'exclude': lambda f: f is None }})
    r"""The service's best guess as to the topic of the request image. Inferred from similar images on the open web."""  
    full_matching_images: Optional[list[shared_googlecloudvisionv1p2beta1webdetectionwebimage.GoogleCloudVisionV1p2beta1WebDetectionWebImage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('fullMatchingImages'), 'exclude': lambda f: f is None }})
    r"""Fully matching images from the Internet. Can include resized copies of the query image."""  
    pages_with_matching_images: Optional[list[shared_googlecloudvisionv1p2beta1webdetectionwebpage.GoogleCloudVisionV1p2beta1WebDetectionWebPage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('pagesWithMatchingImages'), 'exclude': lambda f: f is None }})
    r"""Web pages containing the matching images from the Internet."""  
    partial_matching_images: Optional[list[shared_googlecloudvisionv1p2beta1webdetectionwebimage.GoogleCloudVisionV1p2beta1WebDetectionWebImage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('partialMatchingImages'), 'exclude': lambda f: f is None }})
    r"""Partial matching images from the Internet. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops."""  
    visually_similar_images: Optional[list[shared_googlecloudvisionv1p2beta1webdetectionwebimage.GoogleCloudVisionV1p2beta1WebDetectionWebImage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('visuallySimilarImages'), 'exclude': lambda f: f is None }})
    r"""The visually similar image results."""  
    web_entities: Optional[list[shared_googlecloudvisionv1p2beta1webdetectionwebentity.GoogleCloudVisionV1p2beta1WebDetectionWebEntity]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('webEntities'), 'exclude': lambda f: f is None }})
    r"""Deduced entities from similar images on the Internet."""  
    