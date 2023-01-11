package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetServersId200ApplicationJsonServerPublicNetIpv6
 * IPv6 network assigned to this Server and its reverse DNS entry
**/
public class GetServersId200ApplicationJsonServerPublicNetIpv6 {
    @JsonProperty("blocked")
    public Boolean blocked;
    public GetServersId200ApplicationJsonServerPublicNetIpv6 withBlocked(Boolean blocked) {
        this.blocked = blocked;
        return this;
    }
    @JsonProperty("dns_ptr")
    public GetServersId200ApplicationJsonServerPublicNetIpv6DnsPtr[] dnsPtr;
    public GetServersId200ApplicationJsonServerPublicNetIpv6 withDnsPtr(GetServersId200ApplicationJsonServerPublicNetIpv6DnsPtr[] dnsPtr) {
        this.dnsPtr = dnsPtr;
        return this;
    }
    @JsonProperty("ip")
    public String ip;
    public GetServersId200ApplicationJsonServerPublicNetIpv6 withIp(String ip) {
        this.ip = ip;
        return this;
    }
}