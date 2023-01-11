package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostServersCreateServerResponseServerPublicNetIpv6
 * IPv6 network assigned to this Server and its reverse DNS entry
**/
public class PostServersCreateServerResponseServerPublicNetIpv6 {
    @JsonProperty("blocked")
    public Boolean blocked;
    public PostServersCreateServerResponseServerPublicNetIpv6 withBlocked(Boolean blocked) {
        this.blocked = blocked;
        return this;
    }
    @JsonProperty("dns_ptr")
    public PostServersCreateServerResponseServerPublicNetIpv6DnsPtr[] dnsPtr;
    public PostServersCreateServerResponseServerPublicNetIpv6 withDnsPtr(PostServersCreateServerResponseServerPublicNetIpv6DnsPtr[] dnsPtr) {
        this.dnsPtr = dnsPtr;
        return this;
    }
    @JsonProperty("ip")
    public String ip;
    public PostServersCreateServerResponseServerPublicNetIpv6 withIp(String ip) {
        this.ip = ip;
        return this;
    }
}