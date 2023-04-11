import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommendationengineV1beta1FeatureMapFloatList } from "./googlecloudrecommendationenginev1beta1featuremapfloatlist";
import { GoogleCloudRecommendationengineV1beta1FeatureMapStringList } from "./googlecloudrecommendationenginev1beta1featuremapstringlist";
/**
 * FeatureMap represents extra features that customers want to include in the recommendation model for catalogs/user events as categorical/numerical features.
 */
export declare class GoogleCloudRecommendationengineV1beta1FeatureMap extends SpeakeasyBase {
    /**
     * Categorical features that can take on one of a limited number of possible values. Some examples would be the brand/maker of a product, or country of a customer. Feature names and values must be UTF-8 encoded strings. For example: `{ "colors": {"value": ["yellow", "green"]}, "sizes": {"value":["S", "M"]}`
     */
    categoricalFeatures?: Record<string, GoogleCloudRecommendationengineV1beta1FeatureMapStringList>;
    /**
     * Numerical features. Some examples would be the height/weight of a product, or age of a customer. Feature names must be UTF-8 encoded strings. For example: `{ "lengths_cm": {"value":[2.3, 15.4]}, "heights_cm": {"value":[8.1, 6.4]} }`
     */
    numericalFeatures?: Record<string, GoogleCloudRecommendationengineV1beta1FeatureMapFloatList>;
}
