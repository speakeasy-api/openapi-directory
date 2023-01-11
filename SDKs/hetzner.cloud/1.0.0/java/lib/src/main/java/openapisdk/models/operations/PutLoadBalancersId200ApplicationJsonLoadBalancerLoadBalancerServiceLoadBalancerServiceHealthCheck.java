package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck
 * Service health check
**/
public class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("http")
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp http;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck withHttp(PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp http) {
        this.http = http;
        return this;
    }
    @JsonProperty("interval")
    public Long interval;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck withInterval(Long interval) {
        this.interval = interval;
        return this;
    }
    @JsonProperty("port")
    public Long port;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck withPort(Long port) {
        this.port = port;
        return this;
    }
    @JsonProperty("protocol")
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum protocol;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck withProtocol(PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonProperty("retries")
    public Long retries;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck withRetries(Long retries) {
        this.retries = retries;
        return this;
    }
    @JsonProperty("timeout")
    public Long timeout;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck withTimeout(Long timeout) {
        this.timeout = timeout;
        return this;
    }
}