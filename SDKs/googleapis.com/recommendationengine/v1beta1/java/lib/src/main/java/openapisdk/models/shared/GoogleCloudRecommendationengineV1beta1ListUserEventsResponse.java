package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommendationengineV1beta1ListUserEventsResponse
 * Response message for ListUserEvents method.
**/
public class GoogleCloudRecommendationengineV1beta1ListUserEventsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudRecommendationengineV1beta1ListUserEventsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userEvents")
    public GoogleCloudRecommendationengineV1beta1UserEvent[] userEvents;
    public GoogleCloudRecommendationengineV1beta1ListUserEventsResponse withUserEvents(GoogleCloudRecommendationengineV1beta1UserEvent[] userEvents) {
        this.userEvents = userEvents;
        return this;
    }
}