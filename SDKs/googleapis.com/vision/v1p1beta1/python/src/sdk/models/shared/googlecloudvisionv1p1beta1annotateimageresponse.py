import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudvisionv1p1beta1imageannotationcontext as shared_googlecloudvisionv1p1beta1imageannotationcontext
from ..shared import googlecloudvisionv1p1beta1crophintsannotation as shared_googlecloudvisionv1p1beta1crophintsannotation
from ..shared import status as shared_status
from ..shared import googlecloudvisionv1p1beta1faceannotation as shared_googlecloudvisionv1p1beta1faceannotation
from ..shared import googlecloudvisionv1p1beta1textannotation as shared_googlecloudvisionv1p1beta1textannotation
from ..shared import googlecloudvisionv1p1beta1imageproperties as shared_googlecloudvisionv1p1beta1imageproperties
from ..shared import googlecloudvisionv1p1beta1entityannotation as shared_googlecloudvisionv1p1beta1entityannotation
from ..shared import googlecloudvisionv1p1beta1localizedobjectannotation as shared_googlecloudvisionv1p1beta1localizedobjectannotation
from ..shared import googlecloudvisionv1p1beta1productsearchresults as shared_googlecloudvisionv1p1beta1productsearchresults
from ..shared import googlecloudvisionv1p1beta1safesearchannotation as shared_googlecloudvisionv1p1beta1safesearchannotation
from ..shared import googlecloudvisionv1p1beta1webdetection as shared_googlecloudvisionv1p1beta1webdetection


@dataclass_json
@dataclasses.dataclass
class GoogleCloudVisionV1p1beta1AnnotateImageResponse:
    r"""GoogleCloudVisionV1p1beta1AnnotateImageResponse
    Response to an image annotation request.
    """
    
    context: Optional[shared_googlecloudvisionv1p1beta1imageannotationcontext.GoogleCloudVisionV1p1beta1ImageAnnotationContext] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('context') }})
    crop_hints_annotation: Optional[shared_googlecloudvisionv1p1beta1crophintsannotation.GoogleCloudVisionV1p1beta1CropHintsAnnotation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cropHintsAnnotation') }})
    error: Optional[shared_status.Status] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    face_annotations: Optional[list[shared_googlecloudvisionv1p1beta1faceannotation.GoogleCloudVisionV1p1beta1FaceAnnotation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('faceAnnotations') }})
    full_text_annotation: Optional[shared_googlecloudvisionv1p1beta1textannotation.GoogleCloudVisionV1p1beta1TextAnnotation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullTextAnnotation') }})
    image_properties_annotation: Optional[shared_googlecloudvisionv1p1beta1imageproperties.GoogleCloudVisionV1p1beta1ImageProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imagePropertiesAnnotation') }})
    label_annotations: Optional[list[shared_googlecloudvisionv1p1beta1entityannotation.GoogleCloudVisionV1p1beta1EntityAnnotation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelAnnotations') }})
    landmark_annotations: Optional[list[shared_googlecloudvisionv1p1beta1entityannotation.GoogleCloudVisionV1p1beta1EntityAnnotation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('landmarkAnnotations') }})
    localized_object_annotations: Optional[list[shared_googlecloudvisionv1p1beta1localizedobjectannotation.GoogleCloudVisionV1p1beta1LocalizedObjectAnnotation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localizedObjectAnnotations') }})
    logo_annotations: Optional[list[shared_googlecloudvisionv1p1beta1entityannotation.GoogleCloudVisionV1p1beta1EntityAnnotation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logoAnnotations') }})
    product_search_results: Optional[shared_googlecloudvisionv1p1beta1productsearchresults.GoogleCloudVisionV1p1beta1ProductSearchResults] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productSearchResults') }})
    safe_search_annotation: Optional[shared_googlecloudvisionv1p1beta1safesearchannotation.GoogleCloudVisionV1p1beta1SafeSearchAnnotation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('safeSearchAnnotation') }})
    text_annotations: Optional[list[shared_googlecloudvisionv1p1beta1entityannotation.GoogleCloudVisionV1p1beta1EntityAnnotation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textAnnotations') }})
    web_detection: Optional[shared_googlecloudvisionv1p1beta1webdetection.GoogleCloudVisionV1p1beta1WebDetection] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webDetection') }})
    
