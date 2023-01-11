package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ChangeDiscoverabilityRequest {
    @JsonProperty("enable_discovery")
    public Boolean enableDiscovery;
    public ChangeDiscoverabilityRequest withEnableDiscovery(Boolean enableDiscovery) {
        this.enableDiscovery = enableDiscovery;
        return this;
    }
}