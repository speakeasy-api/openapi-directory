package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetServers200ApplicationJsonServersPublicNetIpv6DnsPtr {
    @JsonProperty("dns_ptr")
    public String dnsPtr;
    public GetServers200ApplicationJsonServersPublicNetIpv6DnsPtr withDnsPtr(String dnsPtr) {
        this.dnsPtr = dnsPtr;
        return this;
    }
    @JsonProperty("ip")
    public String ip;
    public GetServers200ApplicationJsonServersPublicNetIpv6DnsPtr withIp(String ip) {
        this.ip = ip;
        return this;
    }
}