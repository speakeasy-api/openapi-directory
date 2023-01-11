package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkWirelessSsidRequestBodyDnsRewrite
 * DNS servers rewrite settings
**/
public class UpdateNetworkWirelessSsidRequestBodyDnsRewrite {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dnsCustomNameservers")
    public String[] dnsCustomNameservers;
    public UpdateNetworkWirelessSsidRequestBodyDnsRewrite withDnsCustomNameservers(String[] dnsCustomNameservers) {
        this.dnsCustomNameservers = dnsCustomNameservers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public UpdateNetworkWirelessSsidRequestBodyDnsRewrite withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
}