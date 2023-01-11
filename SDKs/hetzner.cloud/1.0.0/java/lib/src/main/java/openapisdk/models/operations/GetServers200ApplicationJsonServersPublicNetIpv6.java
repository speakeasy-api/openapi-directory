package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetServers200ApplicationJsonServersPublicNetIpv6
 * IPv6 network assigned to this Server and its reverse DNS entry
**/
public class GetServers200ApplicationJsonServersPublicNetIpv6 {
    @JsonProperty("blocked")
    public Boolean blocked;
    public GetServers200ApplicationJsonServersPublicNetIpv6 withBlocked(Boolean blocked) {
        this.blocked = blocked;
        return this;
    }
    @JsonProperty("dns_ptr")
    public GetServers200ApplicationJsonServersPublicNetIpv6DnsPtr[] dnsPtr;
    public GetServers200ApplicationJsonServersPublicNetIpv6 withDnsPtr(GetServers200ApplicationJsonServersPublicNetIpv6DnsPtr[] dnsPtr) {
        this.dnsPtr = dnsPtr;
        return this;
    }
    @JsonProperty("ip")
    public String ip;
    public GetServers200ApplicationJsonServersPublicNetIpv6 withIp(String ip) {
        this.ip = ip;
        return this;
    }
}