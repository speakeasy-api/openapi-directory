package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDiscoveryengineV1betaImportUserEventsRequestInlineSource
 * The inline source for the input config for ImportUserEvents method.
**/
public class GoogleCloudDiscoveryengineV1betaImportUserEventsRequestInlineSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userEvents")
    public GoogleCloudDiscoveryengineV1betaUserEvent[] userEvents;
    public GoogleCloudDiscoveryengineV1betaImportUserEventsRequestInlineSource withUserEvents(GoogleCloudDiscoveryengineV1betaUserEvent[] userEvents) {
        this.userEvents = userEvents;
        return this;
    }
}