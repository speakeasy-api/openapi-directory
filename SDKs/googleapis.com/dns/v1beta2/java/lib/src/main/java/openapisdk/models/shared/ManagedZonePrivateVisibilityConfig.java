package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ManagedZonePrivateVisibilityConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gkeClusters")
    public ManagedZonePrivateVisibilityConfigGkeCluster[] gkeClusters;
    public ManagedZonePrivateVisibilityConfig withGkeClusters(ManagedZonePrivateVisibilityConfigGkeCluster[] gkeClusters) {
        this.gkeClusters = gkeClusters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ManagedZonePrivateVisibilityConfig withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networks")
    public ManagedZonePrivateVisibilityConfigNetwork[] networks;
    public ManagedZonePrivateVisibilityConfig withNetworks(ManagedZonePrivateVisibilityConfigNetwork[] networks) {
        this.networks = networks;
        return this;
    }
}