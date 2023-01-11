package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Policy
 * A policy is a collection of DNS rules applied to one or more Virtual Private Cloud resources.
**/
public class Policy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alternativeNameServerConfig")
    public PolicyAlternativeNameServerConfig alternativeNameServerConfig;
    public Policy withAlternativeNameServerConfig(PolicyAlternativeNameServerConfig alternativeNameServerConfig) {
        this.alternativeNameServerConfig = alternativeNameServerConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Policy withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableInboundForwarding")
    public Boolean enableInboundForwarding;
    public Policy withEnableInboundForwarding(Boolean enableInboundForwarding) {
        this.enableInboundForwarding = enableInboundForwarding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableLogging")
    public Boolean enableLogging;
    public Policy withEnableLogging(Boolean enableLogging) {
        this.enableLogging = enableLogging;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Policy withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Policy withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Policy withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networks")
    public PolicyNetwork[] networks;
    public Policy withNetworks(PolicyNetwork[] networks) {
        this.networks = networks;
        return this;
    }
}