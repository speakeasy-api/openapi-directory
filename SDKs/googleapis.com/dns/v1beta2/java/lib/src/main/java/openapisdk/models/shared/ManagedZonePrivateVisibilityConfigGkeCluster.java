package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ManagedZonePrivateVisibilityConfigGkeCluster {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gkeClusterName")
    public String gkeClusterName;
    public ManagedZonePrivateVisibilityConfigGkeCluster withGkeClusterName(String gkeClusterName) {
        this.gkeClusterName = gkeClusterName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ManagedZonePrivateVisibilityConfigGkeCluster withKind(String kind) {
        this.kind = kind;
        return this;
    }
}