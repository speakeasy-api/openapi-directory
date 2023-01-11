package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv4
 * IP address (v4)
**/
public class PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv4 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dns_ptr")
    public String dnsPtr;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv4 withDnsPtr(String dnsPtr) {
        this.dnsPtr = dnsPtr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip")
    public String ip;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv4 withIp(String ip) {
        this.ip = ip;
        return this;
    }
}