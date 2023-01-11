package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostFloatingIps201ApplicationJsonFloatingIpDnsPtr {
    @JsonProperty("dns_ptr")
    public String dnsPtr;
    public PostFloatingIps201ApplicationJsonFloatingIpDnsPtr withDnsPtr(String dnsPtr) {
        this.dnsPtr = dnsPtr;
        return this;
    }
    @JsonProperty("ip")
    public String ip;
    public PostFloatingIps201ApplicationJsonFloatingIpDnsPtr withIp(String ip) {
        this.ip = ip;
        return this;
    }
}