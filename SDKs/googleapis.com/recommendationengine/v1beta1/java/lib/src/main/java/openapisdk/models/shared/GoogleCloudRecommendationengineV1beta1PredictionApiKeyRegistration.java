package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration
 * Registered Api Key.
**/
public class GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiKey")
    public String apiKey;
    public GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}