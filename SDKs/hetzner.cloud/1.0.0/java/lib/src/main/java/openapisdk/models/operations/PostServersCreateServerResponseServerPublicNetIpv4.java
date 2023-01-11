package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostServersCreateServerResponseServerPublicNetIpv4
 * IP address (v4) and its reverse DNS entry of this Server
**/
public class PostServersCreateServerResponseServerPublicNetIpv4 {
    @JsonProperty("blocked")
    public Boolean blocked;
    public PostServersCreateServerResponseServerPublicNetIpv4 withBlocked(Boolean blocked) {
        this.blocked = blocked;
        return this;
    }
    @JsonProperty("dns_ptr")
    public String dnsPtr;
    public PostServersCreateServerResponseServerPublicNetIpv4 withDnsPtr(String dnsPtr) {
        this.dnsPtr = dnsPtr;
        return this;
    }
    @JsonProperty("ip")
    public String ip;
    public PostServersCreateServerResponseServerPublicNetIpv4 withIp(String ip) {
        this.ip = ip;
        return this;
    }
}