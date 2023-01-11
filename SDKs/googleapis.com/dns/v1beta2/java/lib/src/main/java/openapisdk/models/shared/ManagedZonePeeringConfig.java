package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ManagedZonePeeringConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ManagedZonePeeringConfig withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetNetwork")
    public ManagedZonePeeringConfigTargetNetwork targetNetwork;
    public ManagedZonePeeringConfig withTargetNetwork(ManagedZonePeeringConfigTargetNetwork targetNetwork) {
        this.targetNetwork = targetNetwork;
        return this;
    }
}