package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ManagedZoneForwardingConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ManagedZoneForwardingConfig withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetNameServers")
    public ManagedZoneForwardingConfigNameServerTarget[] targetNameServers;
    public ManagedZoneForwardingConfig withTargetNameServers(ManagedZoneForwardingConfigNameServerTarget[] targetNameServers) {
        this.targetNameServers = targetNameServers;
        return this;
    }
}