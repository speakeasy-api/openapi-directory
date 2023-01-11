package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkCellularGatewayDhcpRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dhcpLeaseTime")
    public String dhcpLeaseTime;
    public UpdateNetworkCellularGatewayDhcpRequestBody withDhcpLeaseTime(String dhcpLeaseTime) {
        this.dhcpLeaseTime = dhcpLeaseTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dnsCustomNameservers")
    public String[] dnsCustomNameservers;
    public UpdateNetworkCellularGatewayDhcpRequestBody withDnsCustomNameservers(String[] dnsCustomNameservers) {
        this.dnsCustomNameservers = dnsCustomNameservers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dnsNameservers")
    public String dnsNameservers;
    public UpdateNetworkCellularGatewayDhcpRequestBody withDnsNameservers(String dnsNameservers) {
        this.dnsNameservers = dnsNameservers;
        return this;
    }
}