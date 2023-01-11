package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommendationengineV1beta1FeatureMap
 * FeatureMap represents extra features that customers want to include in the recommendation model for catalogs/user events as categorical/numerical features.
**/
public class GoogleCloudRecommendationengineV1beta1FeatureMap {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoricalFeatures")
    public java.util.Map<String, GoogleCloudRecommendationengineV1beta1FeatureMapStringList> categoricalFeatures;
    public GoogleCloudRecommendationengineV1beta1FeatureMap withCategoricalFeatures(java.util.Map<String, GoogleCloudRecommendationengineV1beta1FeatureMapStringList> categoricalFeatures) {
        this.categoricalFeatures = categoricalFeatures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numericalFeatures")
    public java.util.Map<String, GoogleCloudRecommendationengineV1beta1FeatureMapFloatList> numericalFeatures;
    public GoogleCloudRecommendationengineV1beta1FeatureMap withNumericalFeatures(java.util.Map<String, GoogleCloudRecommendationengineV1beta1FeatureMapFloatList> numericalFeatures) {
        this.numericalFeatures = numericalFeatures;
        return this;
    }
}