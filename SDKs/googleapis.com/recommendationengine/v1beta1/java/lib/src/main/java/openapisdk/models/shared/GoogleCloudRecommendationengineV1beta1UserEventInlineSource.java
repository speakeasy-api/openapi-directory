package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommendationengineV1beta1UserEventInlineSource
 * The inline source for the input config for ImportUserEvents method.
**/
public class GoogleCloudRecommendationengineV1beta1UserEventInlineSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userEvents")
    public GoogleCloudRecommendationengineV1beta1UserEvent[] userEvents;
    public GoogleCloudRecommendationengineV1beta1UserEventInlineSource withUserEvents(GoogleCloudRecommendationengineV1beta1UserEvent[] userEvents) {
        this.userEvents = userEvents;
        return this;
    }
}