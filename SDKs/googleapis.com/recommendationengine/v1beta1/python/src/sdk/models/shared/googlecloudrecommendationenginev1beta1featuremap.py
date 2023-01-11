import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudrecommendationenginev1beta1featuremapstringlist as shared_googlecloudrecommendationenginev1beta1featuremapstringlist
from ..shared import googlecloudrecommendationenginev1beta1featuremapfloatlist as shared_googlecloudrecommendationenginev1beta1featuremapfloatlist


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRecommendationengineV1beta1FeatureMap:
    r"""GoogleCloudRecommendationengineV1beta1FeatureMap
    FeatureMap represents extra features that customers want to include in the recommendation model for catalogs/user events as categorical/numerical features.
    """
    
    categorical_features: Optional[dict[str, shared_googlecloudrecommendationenginev1beta1featuremapstringlist.GoogleCloudRecommendationengineV1beta1FeatureMapStringList]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoricalFeatures') }})
    numerical_features: Optional[dict[str, shared_googlecloudrecommendationenginev1beta1featuremapfloatlist.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numericalFeatures') }})
    
