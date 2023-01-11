package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ManagedZonePeeringConfigTargetNetwork {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deactivateTime")
    public String deactivateTime;
    public ManagedZonePeeringConfigTargetNetwork withDeactivateTime(String deactivateTime) {
        this.deactivateTime = deactivateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ManagedZonePeeringConfigTargetNetwork withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkUrl")
    public String networkUrl;
    public ManagedZonePeeringConfigTargetNetwork withNetworkUrl(String networkUrl) {
        this.networkUrl = networkUrl;
        return this;
    }
}