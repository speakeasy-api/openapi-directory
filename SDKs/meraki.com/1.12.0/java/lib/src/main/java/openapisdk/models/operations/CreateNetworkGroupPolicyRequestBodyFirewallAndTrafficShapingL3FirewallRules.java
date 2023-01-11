package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public String comment;
    public CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonProperty("destCidr")
    public String destCidr;
    public CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules withDestCidr(String destCidr) {
        this.destCidr = destCidr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destPort")
    public String destPort;
    public CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules withDestPort(String destPort) {
        this.destPort = destPort;
        return this;
    }
    @JsonProperty("policy")
    public String policy;
    public CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules withPolicy(String policy) {
        this.policy = policy;
        return this;
    }
    @JsonProperty("protocol")
    public String protocol;
    public CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules withProtocol(String protocol) {
        this.protocol = protocol;
        return this;
    }
}