package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestIp
 * IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.
**/
public class PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestIp {
    @JsonProperty("ip")
    public String ip;
    public PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestIp withIp(String ip) {
        this.ip = ip;
        return this;
    }
}