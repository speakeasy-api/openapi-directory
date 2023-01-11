package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetIp
 * IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.
**/
public class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetIp {
    @JsonProperty("ip")
    public String ip;
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetIp withIp(String ip) {
        this.ip = ip;
        return this;
    }
}