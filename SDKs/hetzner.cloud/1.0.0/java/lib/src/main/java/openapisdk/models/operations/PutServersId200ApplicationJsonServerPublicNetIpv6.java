package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PutServersId200ApplicationJsonServerPublicNetIpv6
 * IPv6 network assigned to this Server and its reverse DNS entry
**/
public class PutServersId200ApplicationJsonServerPublicNetIpv6 {
    @JsonProperty("blocked")
    public Boolean blocked;
    public PutServersId200ApplicationJsonServerPublicNetIpv6 withBlocked(Boolean blocked) {
        this.blocked = blocked;
        return this;
    }
    @JsonProperty("dns_ptr")
    public PutServersId200ApplicationJsonServerPublicNetIpv6DnsPtr[] dnsPtr;
    public PutServersId200ApplicationJsonServerPublicNetIpv6 withDnsPtr(PutServersId200ApplicationJsonServerPublicNetIpv6DnsPtr[] dnsPtr) {
        this.dnsPtr = dnsPtr;
        return this;
    }
    @JsonProperty("ip")
    public String ip;
    public PutServersId200ApplicationJsonServerPublicNetIpv6 withIp(String ip) {
        this.ip = ip;
        return this;
    }
}