package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkApplianceFirewallFirewalledServiceRequestBody {
    @JsonProperty("access")
    public UpdateNetworkApplianceFirewallFirewalledServiceRequestBodyAccessEnum access;
    public UpdateNetworkApplianceFirewallFirewalledServiceRequestBody withAccess(UpdateNetworkApplianceFirewallFirewalledServiceRequestBodyAccessEnum access) {
        this.access = access;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedIps")
    public String[] allowedIps;
    public UpdateNetworkApplianceFirewallFirewalledServiceRequestBody withAllowedIps(String[] allowedIps) {
        this.allowedIps = allowedIps;
        return this;
    }
}