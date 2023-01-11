package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ManagedZonePrivateVisibilityConfigNetwork {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ManagedZonePrivateVisibilityConfigNetwork withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkUrl")
    public String networkUrl;
    public ManagedZonePrivateVisibilityConfigNetwork withNetworkUrl(String networkUrl) {
        this.networkUrl = networkUrl;
        return this;
    }
}