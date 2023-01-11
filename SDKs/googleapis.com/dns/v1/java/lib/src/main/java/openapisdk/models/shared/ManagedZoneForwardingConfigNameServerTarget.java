package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ManagedZoneForwardingConfigNameServerTarget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("forwardingPath")
    public ManagedZoneForwardingConfigNameServerTargetForwardingPathEnum forwardingPath;
    public ManagedZoneForwardingConfigNameServerTarget withForwardingPath(ManagedZoneForwardingConfigNameServerTargetForwardingPathEnum forwardingPath) {
        this.forwardingPath = forwardingPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipv4Address")
    public String ipv4Address;
    public ManagedZoneForwardingConfigNameServerTarget withIpv4Address(String ipv4Address) {
        this.ipv4Address = ipv4Address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipv6Address")
    public String ipv6Address;
    public ManagedZoneForwardingConfigNameServerTarget withIpv6Address(String ipv6Address) {
        this.ipv6Address = ipv6Address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ManagedZoneForwardingConfigNameServerTarget withKind(String kind) {
        this.kind = kind;
        return this;
    }
}