import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudvisionv1p2beta1imagesource as shared_googlecloudvisionv1p2beta1imagesource


@dataclass_json
@dataclasses.dataclass
class GoogleCloudVisionV1p2beta1Image:
    r"""GoogleCloudVisionV1p2beta1Image
    Client image to perform Google Cloud Vision API tasks over.
    """
    
    content: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    source: Optional[shared_googlecloudvisionv1p2beta1imagesource.GoogleCloudVisionV1p2beta1ImageSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
