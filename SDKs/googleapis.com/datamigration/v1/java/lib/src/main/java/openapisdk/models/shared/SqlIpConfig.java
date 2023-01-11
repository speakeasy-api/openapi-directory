package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SqlIpConfig
 * IP Management configuration.
**/
public class SqlIpConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorizedNetworks")
    public SqlAclEntry[] authorizedNetworks;
    public SqlIpConfig withAuthorizedNetworks(SqlAclEntry[] authorizedNetworks) {
        this.authorizedNetworks = authorizedNetworks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableIpv4")
    public Boolean enableIpv4;
    public SqlIpConfig withEnableIpv4(Boolean enableIpv4) {
        this.enableIpv4 = enableIpv4;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privateNetwork")
    public String privateNetwork;
    public SqlIpConfig withPrivateNetwork(String privateNetwork) {
        this.privateNetwork = privateNetwork;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requireSsl")
    public Boolean requireSsl;
    public SqlIpConfig withRequireSsl(Boolean requireSsl) {
        this.requireSsl = requireSsl;
        return this;
    }
}