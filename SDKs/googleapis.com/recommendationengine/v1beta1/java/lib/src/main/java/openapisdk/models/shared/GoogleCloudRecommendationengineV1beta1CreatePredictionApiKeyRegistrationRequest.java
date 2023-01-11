package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommendationengineV1beta1CreatePredictionApiKeyRegistrationRequest
 * Request message for the `CreatePredictionApiKeyRegistration` method.
**/
public class GoogleCloudRecommendationengineV1beta1CreatePredictionApiKeyRegistrationRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("predictionApiKeyRegistration")
    public GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration predictionApiKeyRegistration;
    public GoogleCloudRecommendationengineV1beta1CreatePredictionApiKeyRegistrationRequest withPredictionApiKeyRegistration(GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration predictionApiKeyRegistration) {
        this.predictionApiKeyRegistration = predictionApiKeyRegistration;
        return this;
    }
}