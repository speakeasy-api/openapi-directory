/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetLoadBalancerTargetTargetHealthStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listen_port")
    public Long listenPort;

    public GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetLoadBalancerTargetTargetHealthStatus withListenPort(Long listenPort) {
        this.listenPort = listenPort;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetLoadBalancerTargetTargetHealthStatusStatusEnum status;

    public GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetLoadBalancerTargetTargetHealthStatus withStatus(GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetLoadBalancerTargetTargetHealthStatusStatusEnum status) {
        this.status = status;
        return this;
    }
    
    public GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetLoadBalancerTargetTargetHealthStatus(){}
}
