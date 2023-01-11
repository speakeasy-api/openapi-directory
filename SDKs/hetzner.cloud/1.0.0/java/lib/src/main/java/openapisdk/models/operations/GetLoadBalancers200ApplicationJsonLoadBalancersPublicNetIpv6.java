package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetLoadBalancers200ApplicationJsonLoadBalancersPublicNetIpv6
 * IP address (v6)
**/
public class GetLoadBalancers200ApplicationJsonLoadBalancersPublicNetIpv6 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dns_ptr")
    public String dnsPtr;
    public GetLoadBalancers200ApplicationJsonLoadBalancersPublicNetIpv6 withDnsPtr(String dnsPtr) {
        this.dnsPtr = dnsPtr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip")
    public String ip;
    public GetLoadBalancers200ApplicationJsonLoadBalancersPublicNetIpv6 withIp(String ip) {
        this.ip = ip;
        return this;
    }
}