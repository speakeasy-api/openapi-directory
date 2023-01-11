import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudvisionv1p1beta1boundingpoly as shared_googlecloudvisionv1p1beta1boundingpoly
from ..shared import googlecloudvisionv1p1beta1faceannotationlandmark as shared_googlecloudvisionv1p1beta1faceannotationlandmark

class GoogleCloudVisionV1p1beta1FaceAnnotationAngerLikelihoodEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    VERY_UNLIKELY = "VERY_UNLIKELY"
    UNLIKELY = "UNLIKELY"
    POSSIBLE = "POSSIBLE"
    LIKELY = "LIKELY"
    VERY_LIKELY = "VERY_LIKELY"

class GoogleCloudVisionV1p1beta1FaceAnnotationBlurredLikelihoodEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    VERY_UNLIKELY = "VERY_UNLIKELY"
    UNLIKELY = "UNLIKELY"
    POSSIBLE = "POSSIBLE"
    LIKELY = "LIKELY"
    VERY_LIKELY = "VERY_LIKELY"

class GoogleCloudVisionV1p1beta1FaceAnnotationHeadwearLikelihoodEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    VERY_UNLIKELY = "VERY_UNLIKELY"
    UNLIKELY = "UNLIKELY"
    POSSIBLE = "POSSIBLE"
    LIKELY = "LIKELY"
    VERY_LIKELY = "VERY_LIKELY"

class GoogleCloudVisionV1p1beta1FaceAnnotationJoyLikelihoodEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    VERY_UNLIKELY = "VERY_UNLIKELY"
    UNLIKELY = "UNLIKELY"
    POSSIBLE = "POSSIBLE"
    LIKELY = "LIKELY"
    VERY_LIKELY = "VERY_LIKELY"

class GoogleCloudVisionV1p1beta1FaceAnnotationSorrowLikelihoodEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    VERY_UNLIKELY = "VERY_UNLIKELY"
    UNLIKELY = "UNLIKELY"
    POSSIBLE = "POSSIBLE"
    LIKELY = "LIKELY"
    VERY_LIKELY = "VERY_LIKELY"

class GoogleCloudVisionV1p1beta1FaceAnnotationSurpriseLikelihoodEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    VERY_UNLIKELY = "VERY_UNLIKELY"
    UNLIKELY = "UNLIKELY"
    POSSIBLE = "POSSIBLE"
    LIKELY = "LIKELY"
    VERY_LIKELY = "VERY_LIKELY"

class GoogleCloudVisionV1p1beta1FaceAnnotationUnderExposedLikelihoodEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    VERY_UNLIKELY = "VERY_UNLIKELY"
    UNLIKELY = "UNLIKELY"
    POSSIBLE = "POSSIBLE"
    LIKELY = "LIKELY"
    VERY_LIKELY = "VERY_LIKELY"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudVisionV1p1beta1FaceAnnotation:
    r"""GoogleCloudVisionV1p1beta1FaceAnnotation
    A face annotation object contains the results of face detection.
    """
    
    anger_likelihood: Optional[GoogleCloudVisionV1p1beta1FaceAnnotationAngerLikelihoodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('angerLikelihood') }})
    blurred_likelihood: Optional[GoogleCloudVisionV1p1beta1FaceAnnotationBlurredLikelihoodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blurredLikelihood') }})
    bounding_poly: Optional[shared_googlecloudvisionv1p1beta1boundingpoly.GoogleCloudVisionV1p1beta1BoundingPoly] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boundingPoly') }})
    detection_confidence: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectionConfidence') }})
    fd_bounding_poly: Optional[shared_googlecloudvisionv1p1beta1boundingpoly.GoogleCloudVisionV1p1beta1BoundingPoly] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fdBoundingPoly') }})
    headwear_likelihood: Optional[GoogleCloudVisionV1p1beta1FaceAnnotationHeadwearLikelihoodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headwearLikelihood') }})
    joy_likelihood: Optional[GoogleCloudVisionV1p1beta1FaceAnnotationJoyLikelihoodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('joyLikelihood') }})
    landmarking_confidence: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('landmarkingConfidence') }})
    landmarks: Optional[list[shared_googlecloudvisionv1p1beta1faceannotationlandmark.GoogleCloudVisionV1p1beta1FaceAnnotationLandmark]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('landmarks') }})
    pan_angle: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('panAngle') }})
    roll_angle: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rollAngle') }})
    sorrow_likelihood: Optional[GoogleCloudVisionV1p1beta1FaceAnnotationSorrowLikelihoodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sorrowLikelihood') }})
    surprise_likelihood: Optional[GoogleCloudVisionV1p1beta1FaceAnnotationSurpriseLikelihoodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('surpriseLikelihood') }})
    tilt_angle: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tiltAngle') }})
    under_exposed_likelihood: Optional[GoogleCloudVisionV1p1beta1FaceAnnotationUnderExposedLikelihoodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('underExposedLikelihood') }})
    
