package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommendationengineV1beta1PurgeUserEventsRequest
 * Request message for PurgeUserEvents method.
**/
public class GoogleCloudRecommendationengineV1beta1PurgeUserEventsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public String filter;
    public GoogleCloudRecommendationengineV1beta1PurgeUserEventsRequest withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("force")
    public Boolean force;
    public GoogleCloudRecommendationengineV1beta1PurgeUserEventsRequest withForce(Boolean force) {
        this.force = force;
        return this;
    }
}