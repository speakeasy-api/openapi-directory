package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsChangeDnsPtrRequestBody {
    @JsonProperty("dns_ptr")
    public String dnsPtr;
    public PostServersIdActionsChangeDnsPtrRequestBody withDnsPtr(String dnsPtr) {
        this.dnsPtr = dnsPtr;
        return this;
    }
    @JsonProperty("ip")
    public String ip;
    public PostServersIdActionsChangeDnsPtrRequestBody withIp(String ip) {
        this.ip = ip;
        return this;
    }
}