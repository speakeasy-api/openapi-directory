package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetServers200ApplicationJsonServersPublicNetIpv4
 * IP address (v4) and its reverse DNS entry of this Server
**/
public class GetServers200ApplicationJsonServersPublicNetIpv4 {
    @JsonProperty("blocked")
    public Boolean blocked;
    public GetServers200ApplicationJsonServersPublicNetIpv4 withBlocked(Boolean blocked) {
        this.blocked = blocked;
        return this;
    }
    @JsonProperty("dns_ptr")
    public String dnsPtr;
    public GetServers200ApplicationJsonServersPublicNetIpv4 withDnsPtr(String dnsPtr) {
        this.dnsPtr = dnsPtr;
        return this;
    }
    @JsonProperty("ip")
    public String ip;
    public GetServers200ApplicationJsonServersPublicNetIpv4 withIp(String ip) {
        this.ip = ip;
        return this;
    }
}