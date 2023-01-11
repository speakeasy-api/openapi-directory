package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PushConfig
 * Configuration for a push delivery endpoint.
**/
public class PushConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pushEndpoint")
    public String pushEndpoint;
    public PushConfig withPushEndpoint(String pushEndpoint) {
        this.pushEndpoint = pushEndpoint;
        return this;
    }
}