package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkSwitchDhcpServerPolicyRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedServers")
    public String[] allowedServers;
    public UpdateNetworkSwitchDhcpServerPolicyRequestBody withAllowedServers(String[] allowedServers) {
        this.allowedServers = allowedServers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blockedServers")
    public String[] blockedServers;
    public UpdateNetworkSwitchDhcpServerPolicyRequestBody withBlockedServers(String[] blockedServers) {
        this.blockedServers = blockedServers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultPolicy")
    public UpdateNetworkSwitchDhcpServerPolicyRequestBodyDefaultPolicyEnum defaultPolicy;
    public UpdateNetworkSwitchDhcpServerPolicyRequestBody withDefaultPolicy(UpdateNetworkSwitchDhcpServerPolicyRequestBodyDefaultPolicyEnum defaultPolicy) {
        this.defaultPolicy = defaultPolicy;
        return this;
    }
}