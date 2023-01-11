package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PostLoadBalancers201ApplicationJsonLoadBalancerPublicNetIpv6
 * IP address (v6)
**/
public class PostLoadBalancers201ApplicationJsonLoadBalancerPublicNetIpv6 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dns_ptr")
    public String dnsPtr;
    public PostLoadBalancers201ApplicationJsonLoadBalancerPublicNetIpv6 withDnsPtr(String dnsPtr) {
        this.dnsPtr = dnsPtr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip")
    public String ip;
    public PostLoadBalancers201ApplicationJsonLoadBalancerPublicNetIpv6 withIp(String ip) {
        this.ip = ip;
        return this;
    }
}