package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ManagedZoneDnsSecConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultKeySpecs")
    public DnsKeySpec[] defaultKeySpecs;
    public ManagedZoneDnsSecConfig withDefaultKeySpecs(DnsKeySpec[] defaultKeySpecs) {
        this.defaultKeySpecs = defaultKeySpecs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ManagedZoneDnsSecConfig withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nonExistence")
    public ManagedZoneDnsSecConfigNonExistenceEnum nonExistence;
    public ManagedZoneDnsSecConfig withNonExistence(ManagedZoneDnsSecConfigNonExistenceEnum nonExistence) {
        this.nonExistence = nonExistence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public ManagedZoneDnsSecConfigStateEnum state;
    public ManagedZoneDnsSecConfig withState(ManagedZoneDnsSecConfigStateEnum state) {
        this.state = state;
        return this;
    }
}