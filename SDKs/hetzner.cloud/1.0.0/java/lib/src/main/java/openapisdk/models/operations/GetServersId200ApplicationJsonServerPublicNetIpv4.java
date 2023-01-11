package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetServersId200ApplicationJsonServerPublicNetIpv4
 * IP address (v4) and its reverse DNS entry of this Server
**/
public class GetServersId200ApplicationJsonServerPublicNetIpv4 {
    @JsonProperty("blocked")
    public Boolean blocked;
    public GetServersId200ApplicationJsonServerPublicNetIpv4 withBlocked(Boolean blocked) {
        this.blocked = blocked;
        return this;
    }
    @JsonProperty("dns_ptr")
    public String dnsPtr;
    public GetServersId200ApplicationJsonServerPublicNetIpv4 withDnsPtr(String dnsPtr) {
        this.dnsPtr = dnsPtr;
        return this;
    }
    @JsonProperty("ip")
    public String ip;
    public GetServersId200ApplicationJsonServerPublicNetIpv4 withIp(String ip) {
        this.ip = ip;
        return this;
    }
}