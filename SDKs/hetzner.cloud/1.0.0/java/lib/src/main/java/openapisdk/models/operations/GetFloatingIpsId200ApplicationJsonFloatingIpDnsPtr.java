package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetFloatingIpsId200ApplicationJsonFloatingIpDnsPtr {
    @JsonProperty("dns_ptr")
    public String dnsPtr;
    public GetFloatingIpsId200ApplicationJsonFloatingIpDnsPtr withDnsPtr(String dnsPtr) {
        this.dnsPtr = dnsPtr;
        return this;
    }
    @JsonProperty("ip")
    public String ip;
    public GetFloatingIpsId200ApplicationJsonFloatingIpDnsPtr withIp(String ip) {
        this.ip = ip;
        return this;
    }
}