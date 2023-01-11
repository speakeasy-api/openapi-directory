package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDiscoveryengineV1alphaImportUserEventsRequestInlineSource
 * The inline source for the input config for ImportUserEvents method.
**/
public class GoogleCloudDiscoveryengineV1alphaImportUserEventsRequestInlineSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userEvents")
    public GoogleCloudDiscoveryengineV1alphaUserEvent[] userEvents;
    public GoogleCloudDiscoveryengineV1alphaImportUserEventsRequestInlineSource withUserEvents(GoogleCloudDiscoveryengineV1alphaUserEvent[] userEvents) {
        this.userEvents = userEvents;
        return this;
    }
}