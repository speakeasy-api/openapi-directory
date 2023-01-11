package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfig
 * Configures the catalog level that users send events to, and the level at which predictions are made.
**/
public class GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventItemLevel")
    public GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfigEventItemLevelEnum eventItemLevel;
    public GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfig withEventItemLevel(GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfigEventItemLevelEnum eventItemLevel) {
        this.eventItemLevel = eventItemLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("predictItemLevel")
    public GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfigPredictItemLevelEnum predictItemLevel;
    public GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfig withPredictItemLevel(GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfigPredictItemLevelEnum predictItemLevel) {
        this.predictItemLevel = predictItemLevel;
        return this;
    }
}