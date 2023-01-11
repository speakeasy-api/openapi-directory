package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IpConfiguration
 * IP Management configuration.
**/
public class IpConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allocatedIpRange")
    public String allocatedIpRange;
    public IpConfiguration withAllocatedIpRange(String allocatedIpRange) {
        this.allocatedIpRange = allocatedIpRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorizedNetworks")
    public AclEntry[] authorizedNetworks;
    public IpConfiguration withAuthorizedNetworks(AclEntry[] authorizedNetworks) {
        this.authorizedNetworks = authorizedNetworks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enablePrivatePathForGoogleCloudServices")
    public Boolean enablePrivatePathForGoogleCloudServices;
    public IpConfiguration withEnablePrivatePathForGoogleCloudServices(Boolean enablePrivatePathForGoogleCloudServices) {
        this.enablePrivatePathForGoogleCloudServices = enablePrivatePathForGoogleCloudServices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipv4Enabled")
    public Boolean ipv4Enabled;
    public IpConfiguration withIpv4Enabled(Boolean ipv4Enabled) {
        this.ipv4Enabled = ipv4Enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privateNetwork")
    public String privateNetwork;
    public IpConfiguration withPrivateNetwork(String privateNetwork) {
        this.privateNetwork = privateNetwork;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requireSsl")
    public Boolean requireSsl;
    public IpConfiguration withRequireSsl(Boolean requireSsl) {
        this.requireSsl = requireSsl;
        return this;
    }
}