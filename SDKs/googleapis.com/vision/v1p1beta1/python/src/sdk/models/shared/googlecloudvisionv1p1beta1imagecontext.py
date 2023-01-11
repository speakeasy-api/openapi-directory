import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudvisionv1p1beta1crophintsparams as shared_googlecloudvisionv1p1beta1crophintsparams
from ..shared import googlecloudvisionv1p1beta1latlongrect as shared_googlecloudvisionv1p1beta1latlongrect
from ..shared import googlecloudvisionv1p1beta1productsearchparams as shared_googlecloudvisionv1p1beta1productsearchparams
from ..shared import googlecloudvisionv1p1beta1textdetectionparams as shared_googlecloudvisionv1p1beta1textdetectionparams
from ..shared import googlecloudvisionv1p1beta1webdetectionparams as shared_googlecloudvisionv1p1beta1webdetectionparams


@dataclass_json
@dataclasses.dataclass
class GoogleCloudVisionV1p1beta1ImageContext:
    r"""GoogleCloudVisionV1p1beta1ImageContext
    Image context and/or feature-specific parameters.
    """
    
    crop_hints_params: Optional[shared_googlecloudvisionv1p1beta1crophintsparams.GoogleCloudVisionV1p1beta1CropHintsParams] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cropHintsParams') }})
    language_hints: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageHints') }})
    lat_long_rect: Optional[shared_googlecloudvisionv1p1beta1latlongrect.GoogleCloudVisionV1p1beta1LatLongRect] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latLongRect') }})
    product_search_params: Optional[shared_googlecloudvisionv1p1beta1productsearchparams.GoogleCloudVisionV1p1beta1ProductSearchParams] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productSearchParams') }})
    text_detection_params: Optional[shared_googlecloudvisionv1p1beta1textdetectionparams.GoogleCloudVisionV1p1beta1TextDetectionParams] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textDetectionParams') }})
    web_detection_params: Optional[shared_googlecloudvisionv1p1beta1webdetectionparams.GoogleCloudVisionV1p1beta1WebDetectionParams] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webDetectionParams') }})
    
