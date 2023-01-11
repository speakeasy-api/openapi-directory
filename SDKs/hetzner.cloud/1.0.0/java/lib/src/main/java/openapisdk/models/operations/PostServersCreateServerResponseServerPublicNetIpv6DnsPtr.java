package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersCreateServerResponseServerPublicNetIpv6DnsPtr {
    @JsonProperty("dns_ptr")
    public String dnsPtr;
    public PostServersCreateServerResponseServerPublicNetIpv6DnsPtr withDnsPtr(String dnsPtr) {
        this.dnsPtr = dnsPtr;
        return this;
    }
    @JsonProperty("ip")
    public String ip;
    public PostServersCreateServerResponseServerPublicNetIpv6DnsPtr withIp(String ip) {
        this.ip = ip;
        return this;
    }
}