package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck
 * Service health check
**/
public class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("http")
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp http;
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck withHttp(GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp http) {
        this.http = http;
        return this;
    }
    @JsonProperty("interval")
    public Long interval;
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck withInterval(Long interval) {
        this.interval = interval;
        return this;
    }
    @JsonProperty("port")
    public Long port;
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck withPort(Long port) {
        this.port = port;
        return this;
    }
    @JsonProperty("protocol")
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum protocol;
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck withProtocol(GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonProperty("retries")
    public Long retries;
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck withRetries(Long retries) {
        this.retries = retries;
        return this;
    }
    @JsonProperty("timeout")
    public Long timeout;
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck withTimeout(Long timeout) {
        this.timeout = timeout;
        return this;
    }
}