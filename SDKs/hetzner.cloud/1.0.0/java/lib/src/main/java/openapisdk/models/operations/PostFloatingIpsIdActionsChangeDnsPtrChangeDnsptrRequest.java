package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostFloatingIpsIdActionsChangeDnsPtrChangeDnsptrRequest {
    @JsonProperty("dns_ptr")
    public String dnsPtr;
    public PostFloatingIpsIdActionsChangeDnsPtrChangeDnsptrRequest withDnsPtr(String dnsPtr) {
        this.dnsPtr = dnsPtr;
        return this;
    }
    @JsonProperty("ip")
    public String ip;
    public PostFloatingIpsIdActionsChangeDnsPtrChangeDnsptrRequest withIp(String ip) {
        this.ip = ip;
        return this;
    }
}