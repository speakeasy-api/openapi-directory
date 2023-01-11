package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetFloatingIps200ApplicationJsonFloatingIpsDnsPtr {
    @JsonProperty("dns_ptr")
    public String dnsPtr;
    public GetFloatingIps200ApplicationJsonFloatingIpsDnsPtr withDnsPtr(String dnsPtr) {
        this.dnsPtr = dnsPtr;
        return this;
    }
    @JsonProperty("ip")
    public String ip;
    public GetFloatingIps200ApplicationJsonFloatingIpsDnsPtr withIp(String ip) {
        this.ip = ip;
        return this;
    }
}