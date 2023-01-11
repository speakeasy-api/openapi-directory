package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponse
 * Response message for the `ListPredictionApiKeyRegistrations`.
**/
public class GoogleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("predictionApiKeyRegistrations")
    public GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration[] predictionApiKeyRegistrations;
    public GoogleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponse withPredictionApiKeyRegistrations(GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration[] predictionApiKeyRegistrations) {
        this.predictionApiKeyRegistrations = predictionApiKeyRegistrations;
        return this;
    }
}