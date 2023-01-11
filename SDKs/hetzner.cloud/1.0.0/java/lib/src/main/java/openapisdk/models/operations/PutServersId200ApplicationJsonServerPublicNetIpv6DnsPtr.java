package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutServersId200ApplicationJsonServerPublicNetIpv6DnsPtr {
    @JsonProperty("dns_ptr")
    public String dnsPtr;
    public PutServersId200ApplicationJsonServerPublicNetIpv6DnsPtr withDnsPtr(String dnsPtr) {
        this.dnsPtr = dnsPtr;
        return this;
    }
    @JsonProperty("ip")
    public String ip;
    public PutServersId200ApplicationJsonServerPublicNetIpv6DnsPtr withIp(String ip) {
        this.ip = ip;
        return this;
    }
}