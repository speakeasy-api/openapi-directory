package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PolicyAlternativeNameServerConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public PolicyAlternativeNameServerConfig withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetNameServers")
    public PolicyAlternativeNameServerConfigTargetNameServer[] targetNameServers;
    public PolicyAlternativeNameServerConfig withTargetNameServers(PolicyAlternativeNameServerConfigTargetNameServer[] targetNameServers) {
        this.targetNameServers = targetNameServers;
        return this;
    }
}