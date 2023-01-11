package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MasterAuthorizedNetworksConfig
 * Configuration options for the master authorized networks feature. Enabled master authorized networks will disallow all external traffic to access Kubernetes master through HTTPS except traffic from the given CIDR blocks, Google Compute Engine Public IPs and Google Prod IPs.
**/
public class MasterAuthorizedNetworksConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cidrBlocks")
    public CidrBlock[] cidrBlocks;
    public MasterAuthorizedNetworksConfig withCidrBlocks(CidrBlock[] cidrBlocks) {
        this.cidrBlocks = cidrBlocks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public MasterAuthorizedNetworksConfig withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
}