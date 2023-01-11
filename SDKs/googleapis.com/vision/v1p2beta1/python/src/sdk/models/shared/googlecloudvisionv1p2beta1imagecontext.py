import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudvisionv1p2beta1crophintsparams as shared_googlecloudvisionv1p2beta1crophintsparams
from ..shared import googlecloudvisionv1p2beta1latlongrect as shared_googlecloudvisionv1p2beta1latlongrect
from ..shared import googlecloudvisionv1p2beta1productsearchparams as shared_googlecloudvisionv1p2beta1productsearchparams
from ..shared import googlecloudvisionv1p2beta1textdetectionparams as shared_googlecloudvisionv1p2beta1textdetectionparams
from ..shared import googlecloudvisionv1p2beta1webdetectionparams as shared_googlecloudvisionv1p2beta1webdetectionparams


@dataclass_json
@dataclasses.dataclass
class GoogleCloudVisionV1p2beta1ImageContext:
    r"""GoogleCloudVisionV1p2beta1ImageContext
    Image context and/or feature-specific parameters.
    """
    
    crop_hints_params: Optional[shared_googlecloudvisionv1p2beta1crophintsparams.GoogleCloudVisionV1p2beta1CropHintsParams] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cropHintsParams') }})
    language_hints: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageHints') }})
    lat_long_rect: Optional[shared_googlecloudvisionv1p2beta1latlongrect.GoogleCloudVisionV1p2beta1LatLongRect] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latLongRect') }})
    product_search_params: Optional[shared_googlecloudvisionv1p2beta1productsearchparams.GoogleCloudVisionV1p2beta1ProductSearchParams] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productSearchParams') }})
    text_detection_params: Optional[shared_googlecloudvisionv1p2beta1textdetectionparams.GoogleCloudVisionV1p2beta1TextDetectionParams] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textDetectionParams') }})
    web_detection_params: Optional[shared_googlecloudvisionv1p2beta1webdetectionparams.GoogleCloudVisionV1p2beta1WebDetectionParams] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webDetectionParams') }})
    
