/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTarget {
    /**
     * List of health statuses of the services on this target. Only present for target types "server" and "ip".
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("health_status")
    public GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTargetHealthStatus[] healthStatus;

    public GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTarget withHealthStatus(GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTargetHealthStatus[] healthStatus) {
        this.healthStatus = healthStatus;
        return this;
    }
    
    /**
     * IP targets where the traffic should be routed to. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well. Only present for target type "ip".
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip")
    public GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTargetLoadBalancerTargetIP ip;

    public GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTarget withIp(GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTargetLoadBalancerTargetIP ip) {
        this.ip = ip;
        return this;
    }
    
    /**
     * Label selector used to determine targets. Only present for target type "label_selector".
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label_selector")
    public GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTargetLoadBalancerTargetLabelSelector labelSelector;

    public GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTarget withLabelSelector(GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTargetLoadBalancerTargetLabelSelector labelSelector) {
        this.labelSelector = labelSelector;
        return this;
    }
    
    /**
     * Server where the traffic should be routed to. Only present for target type "server".
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("server")
    public GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTargetLoadBalancerTargetServer server;

    public GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTarget withServer(GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTargetLoadBalancerTargetServer server) {
        this.server = server;
        return this;
    }
    
    /**
     * List of resolved label selector target Servers. Only present for type "label_selector".
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targets")
    public GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTargetLoadBalancerTargetTarget[] targets;

    public GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTarget withTargets(GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTargetLoadBalancerTargetTarget[] targets) {
        this.targets = targets;
        return this;
    }
    
    /**
     * Type of the resource
     */
    @JsonProperty("type")
    public GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTargetTypeEnum type;

    public GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTarget withType(GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTargetTypeEnum type) {
        this.type = type;
        return this;
    }
    
    /**
     * Use the private network IP instead of the public IP. Default value is false. Only present for target types "server" and "label_selector".
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use_private_ip")
    public Boolean usePrivateIp;

    public GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTarget withUsePrivateIp(Boolean usePrivateIp) {
        this.usePrivateIp = usePrivateIp;
        return this;
    }
    
    public GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTarget(@JsonProperty("type") GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTargetTypeEnum type) {
        this.type = type;
  }
}
