package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommendationengineV1beta1ImportUserEventsRequest
 * Request message for the ImportUserEvents request.
**/
public class GoogleCloudRecommendationengineV1beta1ImportUserEventsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorsConfig")
    public GoogleCloudRecommendationengineV1beta1ImportErrorsConfig errorsConfig;
    public GoogleCloudRecommendationengineV1beta1ImportUserEventsRequest withErrorsConfig(GoogleCloudRecommendationengineV1beta1ImportErrorsConfig errorsConfig) {
        this.errorsConfig = errorsConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputConfig")
    public GoogleCloudRecommendationengineV1beta1InputConfig inputConfig;
    public GoogleCloudRecommendationengineV1beta1ImportUserEventsRequest withInputConfig(GoogleCloudRecommendationengineV1beta1InputConfig inputConfig) {
        this.inputConfig = inputConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public GoogleCloudRecommendationengineV1beta1ImportUserEventsRequest withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}