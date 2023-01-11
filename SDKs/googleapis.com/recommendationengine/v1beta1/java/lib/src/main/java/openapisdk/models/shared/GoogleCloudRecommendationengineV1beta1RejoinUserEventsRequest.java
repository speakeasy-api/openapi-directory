package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequest
 * Request message for CatalogRejoin method.
**/
public class GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userEventRejoinScope")
    public GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequestUserEventRejoinScopeEnum userEventRejoinScope;
    public GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequest withUserEventRejoinScope(GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequestUserEventRejoinScopeEnum userEventRejoinScope) {
        this.userEventRejoinScope = userEventRejoinScope;
        return this;
    }
}