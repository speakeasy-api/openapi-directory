package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NetworkSettings
 * A NetworkSettings resource is a container for ingress settings for a version or service.
**/
public class NetworkSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ingressTrafficAllowed")
    public NetworkSettingsIngressTrafficAllowedEnum ingressTrafficAllowed;
    public NetworkSettings withIngressTrafficAllowed(NetworkSettingsIngressTrafficAllowedEnum ingressTrafficAllowed) {
        this.ingressTrafficAllowed = ingressTrafficAllowed;
        return this;
    }
}