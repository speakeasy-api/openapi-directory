package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostLoadBalancersIdActionsChangeDnsPtrChangeLoadbalancerDnsPtrRequest {
    @JsonProperty("dns_ptr")
    public String dnsPtr;
    public PostLoadBalancersIdActionsChangeDnsPtrChangeLoadbalancerDnsPtrRequest withDnsPtr(String dnsPtr) {
        this.dnsPtr = dnsPtr;
        return this;
    }
    @JsonProperty("ip")
    public String ip;
    public PostLoadBalancersIdActionsChangeDnsPtrChangeLoadbalancerDnsPtrRequest withIp(String ip) {
        this.ip = ip;
        return this;
    }
}